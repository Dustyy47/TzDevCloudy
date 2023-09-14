import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductsAPI from "../../http/ProductsAPI";
import {
  ICreateProduct,
  IDeleteProduct,
  IEditProduct,
  IProduct,
} from "../../types";

const getProducts = createAsyncThunk<IProduct[], string>(
  "products/getAll",
  async (id) => {
    try {
      const users = await ProductsAPI.getProducts(id);
      return users ?? [];
    } catch (e) {
      return [];
    }
  }
);

const deleteProduct = createAsyncThunk<IProduct | null, IDeleteProduct>(
  "products/delete",
  async (data) => {
    try {
      const user = await ProductsAPI.deleteProduct(data);
      return user ?? null;
    } catch (e) {
      return null;
    }
  }
);

const createProduct = createAsyncThunk<IProduct | null, ICreateProduct>(
  "products/create",
  async (data) => {
    try {
      const user = await ProductsAPI.createProduct(data);
      return user ?? null;
    } catch (e) {
      return null;
    }
  }
);

const editProduct = createAsyncThunk<IProduct | null, IEditProduct>(
  "products/edit",
  async (data) => {
    try {
      const user = await ProductsAPI.editProduct(data);
      return user ?? null;
    } catch (e) {
      return null;
    }
  }
);

interface IProductsSlice {
  products: IProduct[];
  isLoading: boolean;
  isCreating: boolean;
  editingProduct: IProduct | null;
  deletingProduct: IProduct | null;
}

const initialState: IProductsSlice = {
  products: [],
  isLoading: false,
  isCreating: false,
  editingProduct: null,
  deletingProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setEditing(state, action: PayloadAction<IProduct | null>) {
      state.editingProduct = action.payload;
    },
    setCreating(state, action: PayloadAction<boolean>) {
      state.isCreating = action.payload;
    },
    setDeleting(state, action: PayloadAction<IProduct | null>) {
      state.deletingProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deletingProduct = null;
        if (action.payload == null) return;
        state.products = state.products.filter(
          (product) => product.id !== action.payload!.id
        );
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload!);
      })
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        if (action.payload === null) return;
        state.isLoading = false;
        state.products = state.products.map((user) => {
          if (user.id !== action.payload!.id) return user;
          return { ...action.payload! };
        });
      });
  },
});

export const productsReducer = productsSlice.reducer;
export const productsActions = {
  getProducts,
  deleteProduct,
  editProduct,
  createProduct,
  ...productsSlice.actions,
};

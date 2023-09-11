import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UsersAPI from "../../http/UsersAPI";
import { ICreateUser, IEditUser, IUser } from "../../types";

const getUsers = createAsyncThunk<IUser[], undefined>(
  "users/getAll",
  async () => {
    try {
      const users = await UsersAPI.getUsers();
      return users ?? [];
    } catch (e) {
      return [];
    }
  }
);

const getUser = createAsyncThunk<IUser | null, string>(
  "users/getOne",
  async (id) => {
    try {
      const user = await UsersAPI.getUser(id);
      return user ?? null;
    } catch (e) {
      return null;
    }
  }
);

const deleteUser = createAsyncThunk<IUser | null, string>(
  "users/delete",
  async (id) => {
    try {
      const user = await UsersAPI.deleteUser(id);
      return user ?? null;
    } catch (e) {
      return null;
    }
  }
);

const createUser = createAsyncThunk<IUser | null, ICreateUser>(
  "users/create",
  async (data) => {
    try {
      const user = await UsersAPI.createUser(data);
      return user ?? null;
    } catch (e) {
      return null;
    }
  }
);

const editUser = createAsyncThunk<IUser | null, IEditUser>(
  "users/edit",
  async (data) => {
    try {
      const user = await UsersAPI.editUser(data);
      return user ?? null;
    } catch (e) {
      return null;
    }
  }
);
interface IUserSlice {
  users: IUser[];
  isLoading: boolean;
  activeUser: IUser | null;
  editingUser: IUser | null;
  isCreating: boolean;
}

const initialState: IUserSlice = {
  users: [],
  isLoading: true,
  activeUser: null,
  editingUser: null,
  isCreating: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setActiveUser(state, action: PayloadAction<IUser>) {
      state.activeUser = action.payload;
    },
    setEditing(state, action: PayloadAction<IUser | null>) {
      state.editingUser = action.payload;
    },
    setCreating(state, action: PayloadAction<boolean>) {
      state.isCreating = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.activeUser = action.payload;
      })
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.push(action.payload!);
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload == null) return;
        state.users = state.users.filter(
          (user) => user.id !== action.payload!.id
        );
      })
      .addCase(editUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        if (action.payload === null) return;
        state.isLoading = false;
        state.users = state.users.map((user) => {
          if (user.id !== action.payload!.id) return user;
          return { ...action.payload! };
        });
      });
  },
});

export const usersReducer = userSlice.reducer;
export const usersActions = {
  getUsers,
  getUser,
  deleteUser,
  createUser,
  editUser,
  ...userSlice.actions,
};

import { useAppDispatch, useAppSelector } from "../store";
import { productsActions } from "../store/slices/productsSlice";
import { IEditProductForm, IProduct } from "../types";

export function useEditProductModal() {
  const dispatch = useAppDispatch();
  const editingProduct = useAppSelector(
    (state) => state.products.editingProduct
  );

  const isOpen = editingProduct !== null;
  const activeUser = useAppSelector((state) => state.users.activeUser);

  function open(product: IProduct) {
    dispatch(productsActions.setEditing(product));
  }

  function close() {
    dispatch(productsActions.setEditing(null));
  }

  async function submit(data: IEditProductForm) {
    if (!editingProduct || !activeUser) return;
    close();
    await dispatch(
      productsActions.editProduct({
        id: editingProduct.id,
        userId: activeUser.id,
        ...data,
      })
    );
  }

  return { isOpen, editingProduct, open, close, submit, activeUser };
}

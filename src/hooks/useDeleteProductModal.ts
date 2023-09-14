import { useAppDispatch, useAppSelector } from "../store";
import { productsActions } from "../store/slices/productsSlice";
import { IProduct } from "../types";

export function useDeleteProductModal() {
  const activeUser = useAppSelector((state) => state.users.activeUser);
  const deletingProduct = useAppSelector(
    (state) => state.products.deletingProduct
  );
  const isOpen = deletingProduct !== null;
  const dispatch = useAppDispatch();

  function open(product: IProduct) {
    dispatch(productsActions.setDeleting(product));
  }

  function close() {
    dispatch(productsActions.setDeleting(null));
  }

  async function submit() {
    if (!activeUser || !deletingProduct) return;
    await dispatch(
      productsActions.deleteProduct({
        userId: activeUser.id,
        id: deletingProduct.id,
      })
    );
  }

  return {
    isOpen,
    open,
    close,
    submit,
  };
}

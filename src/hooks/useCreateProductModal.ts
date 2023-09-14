import { useAppDispatch, useAppSelector } from "../store";
import { productsActions } from "../store/slices/productsSlice";
import { ICreateProductForm } from "../types";

export function useCreateProductModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.products.isCreating);
  const activeUser = useAppSelector((state) => state.users.activeUser);

  function open() {
    dispatch(productsActions.setCreating(true));
  }

  function close() {
    dispatch(productsActions.setCreating(false));
  }

  async function submit(data: ICreateProductForm) {
    close();
    if (!activeUser) return;
    await dispatch(
      productsActions.createProduct({ userId: activeUser.id, ...data })
    );
  }

  return { isOpen, open, close, submit, activeUser };
}

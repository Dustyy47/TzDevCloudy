import { useAppDispatch, useAppSelector } from "../store";
import { productsActions } from "../store/slices/productsSlice";

export function useProducts() {
  const { products, isLoading } = useAppSelector((state) => state.products);
  const activeUser = useAppSelector((state) => state.users.activeUser);
  const dispatch = useAppDispatch();

  async function loadProducts() {
    if (!activeUser) return;
    await dispatch(productsActions.getProducts(activeUser.id));
  }

  async function deleteProduct(id: string) {
    if (!activeUser) return;
    await dispatch(
      productsActions.deleteProduct({ userId: activeUser.id, id: id })
    );
  }

  return {
    products,
    isLoading,
    loadProducts,
    deleteProduct,
  };
}

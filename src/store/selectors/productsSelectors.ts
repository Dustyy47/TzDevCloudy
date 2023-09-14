import { useAppSelector } from "..";

export function useProductsSelector() {
  const products = useAppSelector((state) => state.products.products);
  const isLoading = useAppSelector((state) => state.products.isLoading);

  return { products, isLoading };
}

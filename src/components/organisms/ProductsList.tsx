import { Box, CircularProgress, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "../molecules/ProductCard";

export function ProductsList() {
  const { isLoading, products, loadProducts } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  if (isLoading) return <CircularProgress />;
  if (products.length === 0) {
    return (
      <Typography variant="body1">Продуктов нет создайте новый!</Typography>
    );
  }
  return (
    <Box className="flex flex-col gap-2">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Box>
  );
}

import { Box, Button, Card, Typography } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { getDate } from "../assets/helpers/getDate";
import { useEditProductModal } from "../hooks/useEditProductModal";
import { useProducts } from "../hooks/useProducts";
import { IProduct } from "../types";

export function ProductCard({ product }: { product: IProduct }) {
  const { deleteProduct } = useProducts();
  const { open } = useEditProductModal();
  function handleEdit() {
    open(product);
  }

  function handleDelete() {
    deleteProduct(product.id);
  }

  return (
    <Card className="p-2 cursor-pointer">
      <Box className="flex justify-between gap-2">
        <Box className="flex flex-col gap-1 w-full">
          <Box className="flex justify-between w-full">
            <Typography>{product.product}</Typography>
            <Typography variant="subtitle2" className="text-gray-500">
              Добавлен: {getDate(product.dateCreate)}
            </Typography>
          </Box>
          <Typography className="text-green-500">
            Цена - {product.price}
          </Typography>
          <Typography className="text-blue-500">
            Количество - {product.count}
          </Typography>
        </Box>
        <Box className="w-full max-w-[150px] flex justify-end gap-2 h-fit">
          <Button onClick={handleEdit}>{<CreateIcon />}</Button>
          <Button onClick={handleDelete}>{<DeleteIcon />}</Button>
        </Box>
      </Box>
    </Card>
  );
}

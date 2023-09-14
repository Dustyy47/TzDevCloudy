import { Box, Button, Card, Typography } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { getDate } from "../../helpers/getDate";
import { useDeleteProductModal } from "../../hooks/useDeleteProductModal";
import { useEditProductModal } from "../../hooks/useEditProductModal";
import { IProduct } from "../../types";

export function ProductCard({ product }: { product: IProduct }) {
  const { open: openEditModal } = useEditProductModal();
  const { open: openDeleteModal } = useDeleteProductModal();

  function handleEdit() {
    openEditModal(product);
  }

  function handleDelete() {
    openDeleteModal(product);
  }

  return (
    <Card className="p-2">
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
          <Button onClick={handleEdit} title="Редактировать">
            {<CreateIcon />}
          </Button>
          <Button onClick={handleDelete} title="Удалить">
            {<DeleteIcon />}
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

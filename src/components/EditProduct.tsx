import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useEditProductModal } from "../hooks/useEditProductModal";
import { ICreateProductForm, IEditProductForm } from "../types";
import CustomModal from "./CustomModal";

export function EditProduct() {
  const { register, handleSubmit, reset } = useForm<IEditProductForm>();
  const { editingProduct, isOpen, close, submit } = useEditProductModal();

  function onSubmit(fields: ICreateProductForm) {
    submit({ ...fields });
  }

  function handleClose() {
    reset();
    close();
  }

  return (
    <CustomModal open={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography>Создание Продукта</Typography>
        <Box className="flex flex-col gap-4">
          <FormControl>
            <InputLabel>Название продукта</InputLabel>
            <Input
              {...register("product", { required: true })}
              placeholder="Введите название"
              defaultValue={editingProduct?.product}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Цена</InputLabel>
            <Input
              {...register("price", { required: true })}
              placeholder="Введите цену"
              type="number"
              defaultValue={editingProduct?.price}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Количество</InputLabel>
            <Input
              {...register("count", { required: true })}
              placeholder="Введите количество"
              type="number"
              defaultValue={editingProduct?.count}
            />
          </FormControl>
          <Button type="submit">Подтвердить</Button>
        </Box>
      </form>
    </CustomModal>
  );
}

import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useCreateProductModal } from "../hooks/useCreateProductModal";
import { ICreateProductForm } from "../types";
import CustomModal from "./CustomModal";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export function CreateProduct() {
  const { register, handleSubmit } = useForm<ICreateProductForm>();
  const { isOpen, close, submit } = useCreateProductModal();

  function onSubmit(fields: ICreateProductForm) {
    submit({ ...fields });
  }

  return (
    <CustomModal open={isOpen} onClose={close}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography>Создание Продукта</Typography>
        <Box sx={formStyle}>
          <FormControl>
            <InputLabel>Название продукта</InputLabel>
            <Input
              {...register("product", { required: true })}
              placeholder="Введите название"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Цена</InputLabel>
            <Input
              {...register("price", { required: true })}
              placeholder="Введите цену"
              type="number"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Количество</InputLabel>
            <Input
              {...register("count", { required: true })}
              placeholder="Введите количество"
              type="number"
            />
          </FormControl>
          <Button type="submit">Подтвердить</Button>
        </Box>
      </form>
    </CustomModal>
  );
}

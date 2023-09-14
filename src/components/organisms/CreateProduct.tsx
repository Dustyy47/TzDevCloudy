import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useCreateProductModal } from "../../hooks/useCreateProductModal";
import { ICreateProductForm } from "../../types";
import CustomModal from "../atoms/CustomModal";

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
            <TextField
              label="Название продукта"
              {...register("product", { required: true })}
              placeholder="Введите название"
            />
          </FormControl>
          <FormControl>
            <TextField
              InputProps={{ inputProps: { min: 0 } }}
              label="Цена"
              placeholder="Введите цену"
              type="number"
              {...register("price", { required: true, min: 0 })}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Количество"
              InputProps={{ inputProps: { min: 0 } }}
              {...register("count", { required: true, min: 0 })}
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

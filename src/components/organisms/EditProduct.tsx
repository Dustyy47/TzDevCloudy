import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useEditProductModal } from "../../hooks/useEditProductModal";
import { ICreateProductForm, IEditProductForm } from "../../types";
import CustomModal from "../atoms/CustomModal";

export function EditProduct() {
  const { register, handleSubmit, reset } = useForm<IEditProductForm>();
  const { editingProduct, isOpen, close, submit } = useEditProductModal();

  function onSubmit(fields: ICreateProductForm) {
    reset();
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
            <TextField
              label="Название продукта"
              {...register("product", { required: true })}
              placeholder="Введите название"
              defaultValue={editingProduct?.product}
            />
          </FormControl>
          <FormControl>
            <TextField
              InputProps={{ inputProps: { min: 0 } }}
              label="Цена"
              placeholder="Введите цену"
              type="number"
              defaultValue={editingProduct?.price}
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
              defaultValue={editingProduct?.count}
            />
          </FormControl>
          <Button type="submit">Подтвердить</Button>
        </Box>
      </form>
    </CustomModal>
  );
}

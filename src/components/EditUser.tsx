import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useEditUserModal } from "../hooks/useEditUserModal";
import { IEditUser } from "../types";
import CustomModal from "./CustomModal";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export type IEditUserForm = Omit<IEditUser, "id">;

export function EditUser({}: {}) {
  const { register, handleSubmit, reset } = useForm<IEditUserForm>();
  const { isOpen, close, submit, editingUser } = useEditUserModal();

  function handleClose() {
    reset();
    close();
  }

  function onSubmit(data: IEditUserForm) {
    reset();
    submit(data);
  }

  return (
    <CustomModal open={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography>Редактирование пользователя</Typography>
        <Box sx={formStyle}>
          <FormControl>
            <InputLabel>Имя пользователя</InputLabel>
            <Input
              {...register("name", { required: true })}
              placeholder="Введите имя"
              defaultValue={editingUser?.name}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Аватар</InputLabel>
            <Input
              {...register("avatar", { required: false })}
              placeholder="Введите ссылку на аватар"
              defaultValue={editingUser?.avatar}
            />
          </FormControl>
          <Button type="submit">Подтвердить</Button>
        </Box>
      </form>
    </CustomModal>
  );
}

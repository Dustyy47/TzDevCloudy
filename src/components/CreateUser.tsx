import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useCreateUserModal } from "../hooks/useCreateUserModal";
import { ICreateUser } from "../types";
import CustomModal from "./CustomModal";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export function CreateUser() {
  const { register, handleSubmit } = useForm<ICreateUser>();
  const { isOpen, close, submit } = useCreateUserModal();

  return (
    <CustomModal open={isOpen} onClose={close}>
      <form onSubmit={handleSubmit(submit)}>
        <Typography>Создание пользователя</Typography>
        <Box sx={formStyle}>
          <FormControl>
            <InputLabel>Имя пользователя</InputLabel>
            <Input
              {...register("name", { required: true })}
              placeholder="Введите имя"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Аватар</InputLabel>
            <Input
              {...register("avatar", { required: false })}
              placeholder="Введите ссылку на аватар"
            />
          </FormControl>
          <Button type="submit">Подтвердить</Button>
        </Box>
      </form>
    </CustomModal>
  );
}

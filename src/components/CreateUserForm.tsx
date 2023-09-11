import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useUsers } from "../hooks/useUsers";
import { AvatarPicker } from "./AvatarPicker";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

interface ICreateUserForm {
  name: string;
  files: File[];
}

export function CreateUserForm() {
  const { register, handleSubmit } = useForm<ICreateUserForm>();
  const { createUser } = useUsers();

  function onSubmit(fields: ICreateUserForm) {
    createUser({ name: fields.name, avatar: fields.files[0] });
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <FormLabel className="mb-2">Аватарка</FormLabel>
            <AvatarPicker
              {...register("files", { required: true })}
              setFile={console.log}
            />
          </FormControl>
          <Button type="submit">Подтвердить</Button>
        </Box>
      </form>
    </Box>
  );
}

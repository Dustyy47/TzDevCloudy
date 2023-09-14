import { Box, Container, Typography } from "@material-ui/core";
import clsx from "clsx";
import { AddButton } from "../components/AddButton";
import { CreateUser } from "../components/CreateUser";
import { EditUser } from "../components/EditUser";
import { UsersList } from "../components/UsersList";
import { useCreateUserModal } from "../hooks/useCreateUserModal";
import { useUsers } from "../hooks/useUsers";

export function UsersScreen() {
  const { users, isLoading, error } = useUsers();
  const { open } = useCreateUserModal();

  return (
    <>
      <Container className="">
        <Typography variant="h2">Пользователи</Typography>
        <Box
          className={clsx(
            "flex",
            users.length === 0 ? "flex-col" : "flex-col-reverse"
          )}
        >
          <UsersList />
          {!isLoading && !error && (
            <AddButton onClick={open}>Добавить пользователя</AddButton>
          )}
        </Box>
      </Container>
      <CreateUser />
      <EditUser />
    </>
  );
}

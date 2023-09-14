import { Box, Container, Typography } from "@material-ui/core";
import clsx from "clsx";
import { AddButton } from "../components/atoms/AddButton";
import { CreateUser } from "../components/organisms/CreateUser";
import { EditUser } from "../components/organisms/EditUser";
import { UsersList } from "../components/organisms/UsersList";
import { useCreateUserModal } from "../hooks/useCreateUserModal";
import { useUsers } from "../hooks/useUsers";

export function UsersPage() {
  const { users, isLoading, error } = useUsers();
  const { open } = useCreateUserModal();
  const wrapperClassname = clsx(
    "flex",
    users.length === 0 ? "flex-col" : "flex-col-reverse"
  );

  return (
    <>
      <Container>
        <Typography variant="h2">Пользователи</Typography>
        <Box className={wrapperClassname}>
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

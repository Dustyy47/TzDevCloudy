import { Box, Button, Container, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import clsx from "clsx";
import { CreateUser } from "../components/CreateUser";
import { EditUser } from "../components/EditUser";
import { UsersList } from "../components/UsersList";
import { useCreateUserModal } from "../hooks/useCreateUserModal";
import { useUsers } from "../hooks/useUsers";

export function UsersScreen() {
  const { users, isLoading } = useUsers();
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
          {!isLoading && (
            <Button onClick={open} className="flex items-center max-w-fit p-2">
              <Typography color="primary" className="h-full leading-none">
                Новый пользователь
              </Typography>
              <AddIcon color="primary" className="-translate-y-0.5" />
            </Button>
          )}
        </Box>
      </Container>
      <CreateUser />
      <EditUser />
    </>
  );
}

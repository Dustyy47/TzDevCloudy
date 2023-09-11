import { Box, Button, Container, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { CreateUserForm } from "../components/CreateUserForm";
import CustomModal from "../components/CustomModal";
import { UsersList } from "../components/UsersList";
import { useUsers } from "../hooks/useUsers";

type IUsersModalState = "closed" | "edit" | "create";

export function UsersScreen() {
  const { users, isLoading, loadUser, loadUsers, deleteUser } = useUsers();
  const [modalState, setModalState] = useState<IUsersModalState>("closed");

  useEffect(() => {
    loadUsers();
  }, []);

  function handleStartCreatingUser(e: React.MouseEvent) {
    e.stopPropagation();
    setModalState("create");
  }

  function handleCloseModal() {
    setModalState("closed");
  }

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
          <UsersList
            users={users}
            isLoading={isLoading}
            onClickUser={loadUser}
            onDeleteUser={deleteUser}
          />
          {!isLoading && (
            <Button
              onClick={handleStartCreatingUser}
              className="flex items-center max-w-fit p-2"
            >
              <Typography color="primary" className="h-full leading-none">
                Новый пользователь
              </Typography>
              <AddIcon color="primary" className="-translate-y-0.5" />
            </Button>
          )}
        </Box>
      </Container>
      <CustomModal
        onClose={handleCloseModal}
        open={modalState !== "closed"}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>{modalState === "create" && <CreateUserForm />}</div>
      </CustomModal>
    </>
  );
}

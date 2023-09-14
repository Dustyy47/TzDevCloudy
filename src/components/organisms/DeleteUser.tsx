import { Box, Button, Typography } from "@material-ui/core";
import { useDeleteUserModal } from "../../hooks/useDeleteUserModal";
import CustomModal from "../atoms/CustomModal";

export function DeleteUser() {
  const { isOpen, close, submit } = useDeleteUserModal();

  return (
    <CustomModal open={isOpen} onClose={close}>
      <>
        <Typography>Удалить пользователя?</Typography>
        <Box>
          <Button onClick={close}>Нет</Button>
          <Button onClick={submit}>Да</Button>
        </Box>
      </>
    </CustomModal>
  );
}

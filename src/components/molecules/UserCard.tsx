import { Avatar, Box, Button, Card, Typography } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDeleteUserModal } from "../../hooks/useDeleteUserModal";
import { useEditUserModal } from "../../hooks/useEditUserModal";
import { useUsers } from "../../hooks/useUsers";
import { IUser } from "../../types";

export function UserCard({ user }: { user: IUser }) {
  const { loadUser } = useUsers();
  const { open: openEditModal } = useEditUserModal();
  const { open: openDeleteModal } = useDeleteUserModal();

  function handleClick() {
    loadUser(user);
  }

  function handleDelete(e: React.MouseEvent) {
    e.stopPropagation();
    openDeleteModal(user);
  }

  function handleEdit(e: React.MouseEvent) {
    e.stopPropagation();
    openEditModal(user);
  }

  return (
    <Card onClick={handleClick} className="p-2 cursor-pointer">
      <Box className="flex justify-between">
        <Box className="flex gap-2">
          <Avatar alt={user.name} variant="rounded" src={user.avatar} />
          <Typography>{user.name}</Typography>
        </Box>
        <Box>
          <Button onClick={handleEdit} title="Редактировать">
            {<CreateIcon />}
          </Button>
          <Button onClick={handleDelete} title="Удалить">
            {<DeleteIcon />}
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

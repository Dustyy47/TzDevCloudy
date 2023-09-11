import { Avatar, Box, Button, Card, Typography } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { useEditUserModal } from "../hooks/useEditUserModal";
import { useUsers } from "../hooks/useUsers";
import { IUser } from "../types";

export function UserCard({ user }: { user: IUser }) {
  const { loadUser, deleteUser } = useUsers();
  const { open } = useEditUserModal();

  function handleClick() {
    loadUser(user);
  }

  function handleDelete(e: React.MouseEvent) {
    e.stopPropagation();
    deleteUser(user.id);
  }

  function handleEdit(e: React.MouseEvent) {
    e.stopPropagation();
    open(user);
  }

  return (
    <Card onClick={handleClick} className="p-2 cursor-pointer">
      <Box className="flex justify-between">
        <Box className="flex gap-2">
          <Avatar alt={user.name} variant="rounded" src={user.avatar} />
          <Typography>{user.name}</Typography>
        </Box>
        <Box>
          <Button onClick={handleEdit}>{<CreateIcon />}</Button>
          <Button onClick={handleDelete}>{<DeleteIcon />}</Button>
        </Box>
      </Box>
    </Card>
  );
}

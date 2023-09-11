import { Avatar, Box, Button, Card, Typography } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { IUser } from "../types";

export function UserCard({
  user,
  onClick,
  onDelete,
}: {
  user: IUser;
  onClick: (user: IUser) => void;
  onDelete: (user: IUser) => void;
}) {
  function handleDelete(e: React.MouseEvent) {
    e.stopPropagation();
    onDelete(user);
  }

  return (
    <Card onClick={() => onClick(user)} className="p-2 cursor-pointer">
      <Box className="flex justify-between">
        <Box className="flex gap-2">
          <Avatar alt={user.name} variant="rounded" src={user.avatar} />
          <Typography>{user.name}</Typography>
        </Box>
        <Box>
          <Button>{<CreateIcon />}</Button>
          <Button onClick={handleDelete}>{<DeleteIcon />}</Button>
        </Box>
      </Box>
    </Card>
  );
}

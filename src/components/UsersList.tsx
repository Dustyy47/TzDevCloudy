import { Box, CircularProgress, Typography } from "@material-ui/core";
import { IUser } from "../types";
import { UserCard } from "./UserCard";

export function UsersList({
  users,
  isLoading,
  onClickUser,
  onDeleteUser,
}: {
  users: IUser[];
  isLoading: boolean;
  onClickUser: (user: IUser) => void;
  onDeleteUser: (user: IUser) => void;
}) {
  if (isLoading) return <CircularProgress />;
  if (users.length === 0) {
    return (
      <Typography variant="body1">
        Пользователей нет создайте нового!
      </Typography>
    );
  }
  return (
    <Box className="flex flex-col gap-2">
      {users.map((user) => (
        <UserCard
          onDelete={onDeleteUser}
          onClick={onClickUser}
          key={user.id}
          user={user}
        />
      ))}
    </Box>
  );
}

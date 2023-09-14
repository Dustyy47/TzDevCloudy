import { Box, CircularProgress, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useUsers } from "../../hooks/useUsers";
import { UserCard } from "../molecules/UserCard";

export function UsersList() {
  const { isLoading, loadUsers, users } = useUsers();

  useEffect(() => {
    loadUsers();
  }, []);

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
        <UserCard key={user.id} user={user} />
      ))}
    </Box>
  );
}

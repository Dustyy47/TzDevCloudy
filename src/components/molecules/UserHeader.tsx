import { Avatar, Box, Typography } from "@material-ui/core";
import { getDate } from "../../helpers/getDate";
import { IUser } from "../../types";

export function UserHeader({ user }: { user: IUser }) {
  return (
    <Box className="flex gap-2">
      <Avatar variant="rounded" className="w-32 h-32" src={user.avatar} />
      <Box>
        <Typography variant="h4">{user.name}</Typography>
        <Typography variant="subtitle1" className="text-gray-500">
          Аккаунт создан: {getDate(user.createdAt)}
        </Typography>
      </Box>
    </Box>
  );
}

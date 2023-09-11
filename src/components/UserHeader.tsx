import { Avatar, Box, Typography } from "@material-ui/core";
import { getDate } from "../assets/helpers/getDate";
import { IUser } from "../types";

const avatarStyles = {
  width: "120px",
  height: "120px",
};

export function UserHeader({ user }: { user: IUser }) {
  return (
    <Box className="flex gap-2">
      <Avatar variant="rounded" src={user.avatar} />
      <Box>
        <Typography variant="h4">{user.name}</Typography>
        <Typography variant="subtitle1" className="text-gray-500">
          Аккаунт создан: {getDate(user.createdAt)}
        </Typography>
      </Box>
    </Box>
  );
}

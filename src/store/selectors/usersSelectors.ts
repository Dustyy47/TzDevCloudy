import { useAppSelector } from "..";

export function useUsersSelector() {
  const users = useAppSelector((state) => state.users.users);
  const isLoading = useAppSelector((state) => state.users.isLoading);
  const error = useAppSelector((state) => state.users.error);
  return { users, isLoading, error };
}

export function useActiveUserSelector() {
  const activeUser = useAppSelector((state) => state.users.activeUser);
  const isLoading = useAppSelector((state) => state.users.isLoading);
  const error = useAppSelector((state) => state.users.error);
  return { activeUser, isLoading, error };
}

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { useUsersSelector } from "../store/selectors/usersSelectors";
import { usersActions } from "../store/slices/usersSlice";
import { IUser } from "../types";

export function useUsers() {
  const { users, isLoading, error } = useUsersSelector();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function loadUsers() {
    await dispatch(usersActions.getUsers());
  }

  const loadUser = useCallback((targetUser: IUser) => {
    dispatch(usersActions.setActiveUser(targetUser));
    navigate(targetUser.id);
  }, []);

  async function deleteUser(id: string) {
    await dispatch(usersActions.deleteUser(id));
  }

  return {
    users,
    isLoading,
    error,
    loadUsers,
    loadUser,
    deleteUser,
  };
}

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { usersActions } from "../store/slices/usersSlice";
import { IUser } from "../types";

export function useUsers() {
  const { users, isLoading, error } = useAppSelector((state) => state.users);
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

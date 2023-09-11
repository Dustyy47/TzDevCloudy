import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UsersAPI from "../http/UsersAPI";
import { useAppDispatch, useAppSelector } from "../store";
import { usersActions } from "../store/slices/usersSlice";
import { ICreateUser, IUser } from "../types";

export function useUsers() {
  const { users, isLoading } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function loadUsers() {
    dispatch(usersActions.getUsers());
  }

  const loadUser = useCallback((targetUser: IUser) => {
    dispatch(usersActions.setActiveUser(targetUser));
    navigate(targetUser.id);
  }, []);

  async function createUser(data: ICreateUser) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("avatar", data.avatar);
    await UsersAPI.createUser(formData);
  }

  async function deleteUser(targetUser: IUser) {
    await UsersAPI.deleteUser(targetUser.id);
  }

  return { users, isLoading, loadUsers, loadUser, deleteUser, createUser };
}

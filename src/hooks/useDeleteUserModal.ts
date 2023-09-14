import { useAppDispatch, useAppSelector } from "../store";
import { usersActions } from "../store/slices/usersSlice";
import { IUser } from "../types";

export function useDeleteUserModal() {
  const deletingUser = useAppSelector((state) => state.users.deletingUser);
  const isOpen = deletingUser !== null;
  const dispatch = useAppDispatch();

  function open(user: IUser) {
    dispatch(usersActions.setDeleting(user));
  }

  function close() {
    dispatch(usersActions.setDeleting(null));
  }

  async function submit() {
    if (!deletingUser) return;
    await dispatch(usersActions.deleteUser(deletingUser.id));
  }

  return {
    isOpen,
    open,
    close,
    submit,
  };
}

import { IEditUserForm } from "../components/EditUser";
import { useAppDispatch, useAppSelector } from "../store";
import { usersActions } from "../store/slices/usersSlice";
import { IUser } from "../types";

export function useEditUserModal() {
  const dispatch = useAppDispatch();
  const editingUser = useAppSelector((state) => state.users.editingUser);
  const isOpen = editingUser !== null;

  function open(user: IUser) {
    dispatch(usersActions.setEditing(user));
  }

  function close() {
    dispatch(usersActions.setEditing(null));
  }

  async function submit(data: IEditUserForm) {
    if (!editingUser) return;
    close();
    await dispatch(usersActions.editUser({ id: editingUser.id, ...data }));
  }

  return { isOpen, open, close, submit, editingUser };
}

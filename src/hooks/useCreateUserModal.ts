import { useAppDispatch, useAppSelector } from "../store";
import { usersActions } from "../store/slices/usersSlice";
import { ICreateUser } from "../types";

export function useCreateUserModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.users.isCreating);

  function open() {
    dispatch(usersActions.setCreating(true));
  }

  function close() {
    dispatch(usersActions.setCreating(false));
  }

  async function submit(data: ICreateUser) {
    close();
    await dispatch(usersActions.createUser(data));
  }

  return { isOpen, open, close, submit };
}

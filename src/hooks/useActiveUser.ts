import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { usersActions } from "../store/slices/usersSlice";

export function useActiveUser() {
  const { activeUser, isLoading } = useAppSelector((state) => state.users);
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!activeUser) {
      dispatch(usersActions.getUser(id!));
    }
  }, [id]);

  return { activeUser, isLoading };
}

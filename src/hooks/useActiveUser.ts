import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { usersActions } from "../store/slices/usersSlice";

export function useActiveUser() {
  const { activeUser, isLoading, error } = useAppSelector(
    (state) => state.users
  );
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchUser() {
      await dispatch(usersActions.getUser(id!));
    }
    if (!activeUser) {
      fetchUser();
    }
  }, [id]);

  return { activeUser, isLoading, error };
}

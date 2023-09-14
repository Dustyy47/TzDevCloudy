import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../store";
import { useActiveUserSelector } from "../store/selectors/usersSelectors";
import { usersActions } from "../store/slices/usersSlice";

export function useActiveUser() {
  const { activeUser, isLoading, error } = useActiveUserSelector();
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

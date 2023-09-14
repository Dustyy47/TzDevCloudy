import { ICreateUserForm } from "../components/CreateUserForm";
import UsersAPI from "../http/UsersAPI";

export function useUserActions() {
  async function createUser(fields: ICreateUserForm) {
    await UsersAPI.createUser(fields);
  }

  async function deleteUser(id: string) {
    await UsersAPI.deleteUser(id);
  }

  return { createUser, deleteUser };
}

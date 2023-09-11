import { $api } from ".";
import { ICreateUser, IEditUser, IUser } from "../types";

class UsersAPI {
  async getUsers() {
    try {
      const { data } = await $api.get<IUser[]>("users");
      return data;
    } catch (e) {}
  }

  async getUser(id: string) {
    try {
      const { data } = await $api.get<IUser>(`users/${id}`);
      return data;
    } catch (e) {}
  }

  async createUser(inputData: ICreateUser) {
    try {
      const { data } = await $api.post("users/", inputData);
      return data;
    } catch (e) {}
  }

  async deleteUser(id: string) {
    try {
      const { data } = await $api.delete(`users/${id}`);
      return data;
    } catch (e) {}
  }

  async editUser(inputData: IEditUser) {
    try {
      const { data } = await $api.put<IUser>(`users/${inputData.id}`, {
        name: inputData.name,
        avatar: inputData.avatar,
      });
      return data;
    } catch (e) {}
  }
}

export default new UsersAPI();

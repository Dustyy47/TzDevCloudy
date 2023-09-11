import { $api } from ".";
import { IUser } from "../types";

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

  async createUser(formData: FormData) {
    try {
      const { data } = await $api.post("users/", formData);
      return data;
    } catch (e) {}
  }

  async deleteUser(id: string) {
    try {
      const { data } = await $api.delete(`users/${id}`);
      return data;
    } catch (e) {}
  }
}

export default new UsersAPI();

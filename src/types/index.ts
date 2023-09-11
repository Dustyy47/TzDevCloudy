export interface IUser {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}

export interface ICreateUser {
  name: string;
  avatar: File;
}

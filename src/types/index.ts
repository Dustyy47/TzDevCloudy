export interface IUser {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}

export interface IProduct {
  product: string;
  price: string;
  dateCreate: string;
  count: number;
  id: string;
  userId: string;
}

export interface ICreateUser {
  name: string;
  avatar?: string;
}

export type ICreateProductForm = Omit<ICreateProduct, "userId" | "dateCreate">;
export type IEditProductForm = ICreateProductForm;

export type ICreateProduct = Omit<IProduct, "id">;

export interface IDeleteProduct {
  id: string;
  userId: string;
}

export interface IEditUser extends ICreateUser {
  id: string;
}

export interface IEditProduct extends Omit<IProduct, "dateCreate"> {
  id: string;
}

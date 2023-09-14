import { $api } from ".";
import {
  ICreateProduct,
  IDeleteProduct,
  IEditProduct,
  IProduct,
} from "../types";

class ProductsAPI {
  async getProducts(userId: string) {
    try {
      const { data } = await $api.get<IProduct[]>(`users/${userId}/products`);
      return data;
    } catch (e) {}
  }

  async createProduct(inputData: ICreateProduct) {
    try {
      const { data } = await $api.post<IProduct>(
        `users/${inputData.userId}/products`,
        inputData
      );
      return data;
    } catch (e) {}
  }

  async deleteProduct(inputData: IDeleteProduct) {
    try {
      const { data } = await $api.delete<IProduct>(
        `users/${inputData.userId}/products/${inputData.id}`
      );
      return data;
    } catch (e) {}
  }

  async editProduct(inputData: IEditProduct) {
    try {
      const { data } = await $api.put<IProduct>(
        `users/${inputData.userId}/products/${inputData.id}`,
        {
          product: inputData.product,
          price: inputData.price,
          count: inputData.count,
        }
      );
      return data;
    } catch (e) {}
  }
}

export default new ProductsAPI();

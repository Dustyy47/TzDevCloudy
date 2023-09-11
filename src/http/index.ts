import axios from "axios";

const API_URL = "https://64fafb2bcb9c00518f7a7676.mockapi.io/api/";

export const $api = axios.create({
  baseURL: API_URL,
});

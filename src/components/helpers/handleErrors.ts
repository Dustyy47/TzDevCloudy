import { AxiosError } from "axios";

export interface ApiError {
  status: number | undefined;
  message: string;
}

export function handleApiError(e: AxiosError): ApiError {
  return {
    status: e.response?.status,
    message: e.message,
  };
}

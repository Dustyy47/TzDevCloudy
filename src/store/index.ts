import { AnyAction, configureStore, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productsReducer } from "./slices/productsSlice";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
  devTools: true,
});

//export const wrapper = createWrapper(() => store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootStore = ToolkitStore<
  RootState,
  AnyAction,
  [ThunkMiddleware<RootState, AnyAction>]
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

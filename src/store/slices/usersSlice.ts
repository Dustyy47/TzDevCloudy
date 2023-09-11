import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UsersAPI from "../../http/UsersAPI";
import { IUser } from "../../types";

const getUsers = createAsyncThunk<IUser[], undefined>(
  "users/getAll",
  async () => {
    try {
      const users = await UsersAPI.getUsers();
      return users ?? [];
    } catch (e) {
      return [];
    }
  }
);

const getUser = createAsyncThunk<IUser | null, string>(
  "users/getOne",
  async (id) => {
    try {
      const user = await UsersAPI.getUser(id);
      return user ?? null;
    } catch (e) {
      return null;
    }
  }
);

interface IUserSlice {
  users: IUser[];
  isLoading: boolean;
  activeUser: IUser | null;
}

const initialState: IUserSlice = {
  users: [],
  isLoading: true,
  activeUser: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setActiveUser(state, action: PayloadAction<IUser>) {
      state.activeUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.activeUser = action.payload;
      });
  },
});

export const usersReducer = userSlice.reducer;
export const usersActions = {
  getUsers,
  getUser,
  ...userSlice.actions,
};

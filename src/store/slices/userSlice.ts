import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  userInfo?: {
    userId: string;
    nickname: string;
    createdAt: string;
  };
}

const initialState: UserState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;

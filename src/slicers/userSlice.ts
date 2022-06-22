import { createSlice } from '@reduxjs/toolkit'

export type User = {
  email: string;
  name: string;
  isAuthenticated: boolean;
}

type Action = {
  type: string;
  payload: User;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {} as User,
  reducers: {
    setUser: (state: User, action: Action) => {
      const { payload } = action;

      state = payload;
    }
  },
})

export const { setUser } = userSlice.actions;

export const selectUser = (state: { user: User }) => state.user

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "../store";

const initialState = { isOnboaded: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleOnboarding: (state, actions) => {
      state.isOnboaded = actions.payload;
    },
  },
});

export const { toggleOnboarding } = authSlice.actions;

export const authSliceReducer = authSlice.reducer;

export const selectUser = (state: RootStateType) => state.auth;

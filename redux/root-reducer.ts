import { combineReducers } from "@reduxjs/toolkit";
import { authSliceReducer } from "./slices/authSlice";

const rootReducer = combineReducers({
  auth: authSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

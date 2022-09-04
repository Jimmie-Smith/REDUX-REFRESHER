import * as redux from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0 };
const initialLoginStatus = { authenticated: false };

const counterSlice = createSlice({
  name: "counter",
  initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
  },
});

const loginSlice = createSlice({
  name: "authenticator",
  initialLoginStatus,
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, authenticator: loginSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const loginActions = loginSlice.actions;

export default store;

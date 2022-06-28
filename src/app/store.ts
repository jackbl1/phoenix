import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createFlowReducer from "./redux";

export const store = configureStore({
  reducer: {
    //globalData: globalReducer,
    createFlow: createFlowReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

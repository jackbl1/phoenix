import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface CreateFlowState {
  artist: string;
}

const initialState: CreateFlowState = {
  artist: "",
};

export const createFlowSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    updateArtist: (state, action: PayloadAction<string>) => {
      state.artist = action.payload;
    },
  },
});

export const { updateArtist } = createFlowSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectArtist = (state: RootState) => state.createFlow.artist;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const artistThunk =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectArtist(getState());
    if (currentValue.length > 5) {
      dispatch(updateArtist("harny arny parmy"));
    }
  };

export default createFlowSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAttribute } from "../common/interfaces";
import { RootState, AppThunk } from "./store";

export interface ICreateFlowState {
  artist: string;
  attributes: { [key: string]: IAttribute };
}

const initialState: ICreateFlowState = {
  artist: "",
  attributes: {
    "1": {
      imageFile: new File([], ""),
      imagePreview: "cityImg",
      isLottery: false,
      isCompleted: false,
    },
  },
};

export const createFlowSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    updateArtist: (state, action: PayloadAction<string>) => {
      state.artist = action.payload;
    },
    addAttribute: (state, action: PayloadAction<IAttribute>) => {
      state.attributes = { ...state.attributes, "2": action.payload };
    },
    updateAttribute: (state, action: PayloadAction<IAttribute>) => {
      state.attributes["1"].isCompleted = true;
    },
    updateAttributeImage: (
      state,
      action: PayloadAction<{ attributeId: string; image: any }>
    ) => {
      state.attributes[action.payload.attributeId].imageFile =
        action.payload.image;
      state.attributes[action.payload.attributeId].imagePreview =
        URL.createObjectURL(action.payload.image);
    },
  },
});

export const {
  updateArtist,
  addAttribute,
  updateAttribute,
  updateAttributeImage,
} = createFlowSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectArtist = (state: RootState) => state.createFlow.artist;
export const selectAttributes = (state: RootState) =>
  state.createFlow.attributes;

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

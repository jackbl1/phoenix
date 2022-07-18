import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAttribute, INft } from "../common/interfaces";
import { RootState, AppThunk } from "./store";

export interface ICreateFlowState {
  artist: string;
  attributes: { [key: string]: IAttribute };
  nfts: INft[];
  walletConnected: string;
}
// TODO: create this global data state for data set on page load
// export interface IGlobalDataState {
//   isWalletConnected: boolean;
// }

const initialState: ICreateFlowState = {
  artist: "",
  walletConnected: "",
  nfts: [],
  attributes: {
    Base: {
      imageFile: "",
      imagePreview: "",
      isLottery: false,
      isCompleted: false,
    },
    City: {
      imageFile: "",
      imagePreview: "",
      isLottery: false,
      isCompleted: false,
    },
    State: {
      imageFile: "",
      imagePreview: "",
      isLottery: false,
      isCompleted: false,
    },
    Venue: {
      imageFile: "",
      imagePreview: "",
      isLottery: false,
      isCompleted: false,
    },
    "Buy Date": {
      imageFile: "",
      imagePreview: "",
      isLottery: false,
      isCompleted: false,
    },
    "Event Date": {
      imageFile: "",
      imagePreview: "",
      isLottery: false,
      isCompleted: false,
    },
    Opener: {
      imageFile: "",
      imagePreview: "",
      isLottery: false,
      isCompleted: false,
    },
  },
};

// TODO set global data state
// const initialStateGlobalData: IGlobalDataState = {
//   isWalletConnected: false,
// };

export const createFlowSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    updateArtist: (state, action: PayloadAction<string>) => {
      state.artist = action.payload;
    },
    setWalletConnected: (state, action: PayloadAction<string>) => {
      state.walletConnected = action.payload;
    },
    addAttribute: (state, action: PayloadAction<IAttribute>) => {
      state.attributes = { ...state.attributes, "2": action.payload };
    },
    setAttributes: (
      state,
      action: PayloadAction<{ [key: string]: IAttribute }>
    ) => {
      state.attributes = action.payload;
    },
    updateAttributeImage: (
      state,
      action: PayloadAction<{
        attributeId: string;
        imageFile: any;
        imagePreview: any;
      }>
    ) => {
      state.attributes[action.payload.attributeId].imageFile =
        action.payload.imageFile;
      state.attributes[action.payload.attributeId].imagePreview =
        action.payload.imagePreview;
    },
    completeAttribute: (state, action: PayloadAction<string>) => {
      state.attributes[action.payload].isCompleted = true;
    },
    setLotteryAttribute: (state, action: PayloadAction<string>) => {
      state.attributes[action.payload].isLottery = true;
    },
    setAttributeData: (
      state,
      action: PayloadAction<{
        attributeId: string;
        data: string;
      }>
    ) => {
      state.attributes[action.payload.attributeId].data = action.payload.data;
    },
    addNFT: (
      state,
      action: PayloadAction<{
        nftTitle: string;
        nftGroup: string;
        imageFile: string;
        imagePreview: any;
      }>
    ) => {
      const tempNft: INft = {
        nftTitle: action.payload.nftTitle,
        nftGroup: action.payload.nftGroup,
        imageFile: action.payload.imageFile,
        imagePreview: action.payload.imagePreview,
      };
      state.nfts.push(tempNft);
    },
  },
});

// export const globalDataSlice = createSlice({
//   name: "globaldata",
//   initialStateGlobalData,
//   reducers: {
//     setWalletConnected: (state, action: PayloadAction<boolean>) => {
//       state.isWalletConnected = action.payload;
//     },
//   },
// });

export const {
  updateArtist,
  setWalletConnected,
  addAttribute,
  setAttributes,
  updateAttributeImage,
  completeAttribute,
  setLotteryAttribute,
  setAttributeData,
  addNFT,
} = createFlowSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectArtist = (state: RootState) => state.createFlow.artist;
export const selectAttributes = (state: RootState) =>
  state.createFlow.attributes;
export const selectWalletConnected = (state: RootState) =>
  state.createFlow.walletConnected;

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

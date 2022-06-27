import cityImg from "../assets/sample-nft-images/city-attribute.png";

export enum ATTRIBUTES {
  //SEATING_LEVEL = "Seating Level",
  CITY = "City",
  STATE = "State",
  VENUE = "Venue",
  BUY_DATE = "Buy Date",
  EVENT_DATE = "Event Date",
  OPENER = "Opener",
}

export const AttributesList = [
  //"Seating Level",
  "City",
  "State",
  "Venue",
  "Buy Date",
  "Event Date",
  "Opener",
];

export const DEFAULT_ATTRIBUTE = {
  default: {
    imageFile: new File([], ""),
    imagePreview: cityImg,
    isLottery: false,
    isCompleted: true,
  },
};
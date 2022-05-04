import { Attribute } from "./Attribute";

export interface IFormData {
  event: string;
  artist: string;
  venue: string;
  date: Date;
  city: string;
  state: string;
  ticketNum: number;
  level: string;
  opener: string;
}

export interface IAttributeData {
  venueAttribute: Attribute;
  dateAttribute: Attribute;
  cityAttribute: Attribute;
  stateAttribute: Attribute;
  openerAttribute: Attribute;
}

export interface IErrorData {
  eventError: string;
  artistError: string;
  venueError: string;
  dateError: string;
  cityError: string;
  stateError: string;
  ticketNumError: string;
  levelError: string;
  openerError: string;
}

export interface IAttribute {
  imageFile: File;
  preview: any;
  lottery: boolean;
  data: string;
}

export enum ATTRIBUTES {
  //SEATING_LEVEL = "Seating Level",
  CITY = "City",
  STATE = "State",
  VENUE = "Venue",
  //BUY_DATE = "Buy Date",
  EVENT_DATE = "Event Date",
  OPENER = "Opener",
}

export const AttributesList = [
  //"Seating Level",
  "City",
  "State",
  "Venue",
  //"Buy Date",
  "Event Date",
  "Opener",
];

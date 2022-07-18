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
  buyDate: string;
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
  imageFile: string;
  imagePreview: string;
  isLottery: boolean;
  isCompleted: boolean;
  data?: string;
}

export interface INft {
  nftTitle: string;
  nftGroup: string;
  imageFile: string;
  imagePreview: any;
}

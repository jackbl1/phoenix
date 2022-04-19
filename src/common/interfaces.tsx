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

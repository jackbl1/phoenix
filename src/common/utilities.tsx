import { IFormData } from "./interfaces";

export function checkFormEntries(input: IFormData): string[] {
  let k: keyof typeof input;
  let output = [];
  for (k in input) {
    if (k.length > 0) {
      output.push(k);
    }
  }
  return output;
}

export function validateEvent(input: string): string {
  if (input.length > 0) {
    return "";
  } else {
    return "Please enter a valid event.";
  }
}

export function validateArtist(input: string): string {
  if (input.length > 0) {
    return "";
  } else {
    return "Please enter a valid artist.";
  }
}

export function validateVenue(input: string): string {
  if (input.length > 0) {
    return "";
  } else {
    return "Please enter a valid venue.";
  }
}

export function validateCity(input: string): string {
  if (input.length > 0) {
    return "";
  } else {
    return "Please enter a valid city.";
  }
}

export function validateState(input: string): string {
  if (input.length > 0) {
    return "";
  } else {
    return "Please enter a valid state.";
  }
}

export function validateTicketNum(input: number): string {
  if (input > 0) {
    return "";
  } else {
    return "Please enter a valid number of tickets sold.";
  }
}

export function validateDate(input: Date): boolean {
  return true;
}

export function validateBaseAttributeFile(input: File): string {
  console.log("image file validation " + input);
  return "";
}

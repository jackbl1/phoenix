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

export function validDate(input: Date): boolean {
  return true;
}

export function validateBaseAttributeFile(input: File): string {
  console.log("image file validation " + input);
  return "";
}

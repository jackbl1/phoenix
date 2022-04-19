export function validateName(input: string): boolean {
  return input.length > 0;
  //whitelist artists here
  //return input === "The Beatles" || input === "TroiBoi";
}

export function validateVenue(input: string): boolean {
  return input.length > 0;
  //whitelist venues here
  //return input === "Showbox" || input === "Mars";
}

export function validateCity(input: string): boolean {
  return input.length > 0;
  //whitelist venues here
  //return input === "Seattle" || input === "San Francisco";
}

export function validateState(input: string): boolean {
  return input.length > 0;
  //whitelist venues here
  //return input === "Washington" || input === "California";
}

export function validDate(input: Date): boolean {
  //validate date however required
  return true;
}

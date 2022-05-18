import { IFormData } from "./interfaces";
import baseImg from "../assets/sample-nft-images/base-image.jpeg";
import cityImg from "../assets/sample-nft-images/city-attribute.png";
import stateImg from "../assets/sample-nft-images/state-attribute.jpg";

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

export function autoFillProps(): any {
  const formData: IFormData = {
    artist: "T-Nohra and the Jackalopes",
    city: "San Francisco",
    date: new Date(2022, 6, 1),
    event: "Charity Concert for Ligma Research",
    level: "",
    opener: "Jacoby Moroney",
    state: "California",
    ticketNum: 10,
    venue: "Box Hall",
    buyDate: "1/2/2022",
  };

  const attributes = {
    Base: {
      imageFile: "baseImg.png",
      imagePreview: baseImg,
      isLottery: false,
      isCompleted: true,
    },
    City: {
      imageFile: "cityImg.png",
      imagePreview: cityImg,
      isLottery: false,
      isCompleted: true,
      data: "San Francisco",
    },
    State: {
      imageFile: "stateImg.png",
      imagePreview: stateImg,
      isLottery: true,
      isCompleted: true,
      data: "California",
    },
    Venue: {
      imageFile: "",
      imagePreview: "",
      isLottery: false,
      isCompleted: false,
      data: "",
    },
    "Buy Date": {
      imageFile: "",
      imagePreview: "",
      isLottery: false,
      isCompleted: false,
      data: "",
    },
    "Event Date": {
      imageFile: "",
      imagePreview: "",
      isLottery: false,
      isCompleted: false,
      data: "",
    },
    Opener: {
      imageFile: "",
      imagePreview: "",
      isLottery: false,
      isCompleted: false,
      data: "",
    },
  };
  return [formData, attributes];
}

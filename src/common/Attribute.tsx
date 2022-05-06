import React from "react";
import AttributeImageUpload from "./AttributeImageUpload";

interface IAttributeProps {
  attributeConst: string;
  attributeLabel: string;
  attributeVal: string;
  attributesArray: any;
  setAttributes: any;
}

interface IAttributeStateProps {
  imageFile: File;
  imagePreview: string;
  lottery: boolean;
  isCompleted: boolean;
}

export default class Attribute extends React.Component<
  IAttributeProps,
  IAttributeStateProps
> {
  constructor(props: any) {
    super(props);
    this.state = {
      imageFile: new File([], ""),
      imagePreview: "",
      lottery: false,
      isCompleted: false,
    };
  }

  setImageFile(input: any) {
    this.setState({ imageFile: input });
  }
  setImagePreview(input: any) {
    console.log("image preview set to");
    console.log(input);
    this.setState({ imagePreview: input });
  }
  getImagePreview() {
    return this.state.imagePreview;
  }

  setLottery(input: boolean) {
    this.setState({ lottery: input });
  }
  setCompleted(input: boolean) {
    this.setState({ isCompleted: input });
  }

  render() {
    return <></>;
  }
}

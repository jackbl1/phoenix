import React from "react";
import { Attribute } from "./Attribute";
import UploadService from "./file-upload.service";
import { ATTRIBUTES, IAttributeData } from "./interfaces";

export interface IImageStateProps {
  message: any;
}

export interface IImageProps {
  currentAttribute: string;
  attributes: IAttributeData;
  setAttributes: any;
}

export default class AttributeImageUpload extends React.Component<
  IImageProps,
  IImageStateProps
> {
  constructor(props: IImageProps & IImageStateProps) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    //this.upload = this.upload.bind(this);

    this.state = {
      message: "",
    };
  }

  componentDidMount() {
    // UploadService.getFiles().then((response: any) => {
    //   this.setState({
    //     imageInfos: response.data,
    //   });
    // });
  }

  selectFile(event: any) {
    const curAttributeObj = this.getCurrentAttributeObject();
    console.log("right before setting image files and stuff");
    console.log(curAttributeObj);
    curAttributeObj.setImageFile(event.target.files[0]);
    curAttributeObj.setImagePreview(URL.createObjectURL(event.target.files[0]));
    this.props.setAttributes(curAttributeObj);

    console.log("attribute is set to");
    console.log(curAttributeObj);

    this.setState({
      message: "",
    });
  }

  // upload() {
  //   UploadService.upload(this.props.attributeImageFile, (event: any) => {})
  //     .then((response: any) => {
  //       this.setState({
  //         message: response.data.message,
  //       });
  //       return UploadService.getFiles();
  //     })
  //     .then((files: any) => {
  //       this.setState({
  //         imageInfos: files.data,
  //       });
  //     })
  //     .catch((err: any) => {
  //       //this.props.setAttributeImageFile(undefined);
  //       this.setState({
  //         message: "Could not upload the image!",
  //       });
  //     });
  // }

  render() {
    const { message } = this.state;
    const attribute = this.getCurrentAttributeObject();
    console.log("about to render");
    console.log(attribute);
    return (
      <label
        htmlFor="file-upload"
        className="file-upload"
        title="Click to upload"
      >
        Click to upload
        {attribute && (
          <div>
            <img className="preview" src={attribute.imagePreview} alt="" />
          </div>
        )}
        {message && (
          <div className="alert alert-secondary mt-3" role="alert">
            {message}
          </div>
        )}
        <input
          title=""
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={this.selectFile}
          hidden
        />
      </label>
    );
  }

  private getCurrentAttributeObject(): Attribute {
    console.log("current attribute name");
    console.log(this.props.currentAttribute);
    if (this.props.currentAttribute === ATTRIBUTES.CITY) {
      return this.props.attributes.cityAttribute;
    } else if (this.props.currentAttribute === ATTRIBUTES.EVENT_DATE) {
      return this.props.attributes.dateAttribute;
    } else if (this.props.currentAttribute === ATTRIBUTES.OPENER) {
      return this.props.attributes.openerAttribute;
    } else if (this.props.currentAttribute === ATTRIBUTES.STATE) {
      return this.props.attributes.stateAttribute;
    } else if (this.props.currentAttribute === ATTRIBUTES.VENUE) {
      return this.props.attributes.venueAttribute;
    } else {
      return this.props.attributes.cityAttribute;
    }
  }
}

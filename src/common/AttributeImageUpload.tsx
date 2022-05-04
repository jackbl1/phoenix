import { setAttribute } from "@fluentui/react/lib/components/KeytipData/useKeytipRef";
import React from "react";
import { Attribute } from "./Attribute";
import UploadService from "./file-upload.service";
import { ATTRIBUTES } from "./interfaces";

export interface IImageStateProps {
  message: any;
  imageInfos: any;
}

export interface IImageProps {
  currentAttribute: string;
  attributes: any;
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
      imageInfos: [],
    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response: any) => {
      this.setState({
        imageInfos: response.data,
      });
    });
  }

  selectFile(event: any) {
    const curAttributeObj = this.getCurrentAttributeObject();
    curAttributeObj.setImageFile(event.target.files[0]);
    curAttributeObj.setImagePreview(URL.createObjectURL(event.target.files[0]));
    this.props.setAttributes(curAttributeObj);

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
    const { message, imageInfos } = this.state;
    return (
      <div className="upload-container">
      <label
        htmlFor="file-upload"
        className="file-upload"
        title="Click to upload"
      >
        <p className="upload-button">Click to upload</p>
        {this.getCurrentAttributeObject() && (
          <div>
            <img
              className="preview"
              src={this.getCurrentAttributeObject().imagePreview}
              alt=""
            />
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
        <ul className="list-group list-group-flush">
          {imageInfos &&
            imageInfos.map((img: any, index: any) => (
              <li className="list-group-item" key={index}>
                <a href={img.url}>{img.name}</a>
              </li>
            ))}
        </ul>
      </label>
      </div>
    );
  }

  private getCurrentAttributeObject(): Attribute {
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

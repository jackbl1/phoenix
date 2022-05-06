import React from "react";
import Attribute from "./Attribute";
import UploadService from "./file-upload.service";

export interface IImageStateProps {
  message: any;
}

export interface IImageProps {
  attribute: Attribute;
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
    this.props.attribute.setImageFile(event.target.files[0]);
    this.props.attribute.setImagePreview(
      URL.createObjectURL(event.target.files[0])
    );
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
    console.log(this.props.attribute);
    return (
      <div className="upload-container">
        <label
          htmlFor="file-upload"
          className="file-upload"
          title="Click to upload"
        >
          Click to upload
          {this.props.attribute?.getImagePreview() && (
            <div>
              <img
                className="preview"
                src={this.props.attribute.getImagePreview()}
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
        </label>
      </div>
    );
  }
}

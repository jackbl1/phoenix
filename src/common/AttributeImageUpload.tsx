import React from "react";
import UploadService from "./file-upload.service";

export interface IImageStateProps {
  message: any;
  imageInfos: any;
}

export interface IImageProps {
  attributeImageFile: any;
  setAttributeImageFile: any;
  attributeImagePreview: any;
  setAttributeImagePreview: any;
}

export default class AttributeImageUpload extends React.Component<
  IImageProps,
  IImageStateProps
> {
  constructor(props: IImageProps & IImageStateProps) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

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
    this.props.setAttributeImageFile(event.target.files[0]);
    this.props.setAttributeImagePreview(
      URL.createObjectURL(event.target.files[0])
    );
    this.setState({
      message: "",
    });
  }

  upload() {
    UploadService.upload(this.props.attributeImageFile, (event: any) => {})
      .then((response: any) => {
        this.setState({
          message: response.data.message,
        });
        return UploadService.getFiles();
      })
      .then((files: any) => {
        this.setState({
          imageInfos: files.data,
        });
      })
      .catch((err: any) => {
        this.props.setAttributeImageFile(undefined);
        this.setState({
          message: "Could not upload the image!",
        });
      });
  }

  render() {
    const { message, imageInfos } = this.state;

    return (
      <label
        htmlFor="file-upload"
        className="file-upload"
        title="Click to upload"
      >
        Click to upload
        {this.props.attributeImagePreview && (
          <div>
            <img
              className="preview"
              src={this.props.attributeImagePreview}
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
    );
  }
}

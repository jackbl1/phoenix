import React from "react";
import UploadService from "./file-upload.service";

export interface IImageStateProps {
  currentFile: any;
  previewImage: any;
  progress: any;
  message: any;
  imageInfos: any;
}

export default class UploadImages extends React.Component<
  {},
  IImageStateProps
> {
  constructor(props: IImageStateProps) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      currentFile: undefined,
      previewImage: undefined,
      progress: 0,
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
    this.setState({
      currentFile: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0]),
      progress: 0,
      message: "",
    });
  }

  upload() {
    this.setState({
      progress: 0,
    });

    UploadService.upload(this.state.currentFile, (event: any) => {})
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
        this.setState({
          progress: 0,
          message: "Could not upload the image!",
          currentFile: undefined,
        });
      });
  }

  render() {
    const { currentFile, previewImage, message, imageInfos } = this.state;

    return (
      <label
        htmlFor="file-upload"
        className="file-upload"
        title="Click to upload"
      >
        Click to upload
        {previewImage && (
          <div>
            <img className="preview" src={previewImage} alt="" />
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

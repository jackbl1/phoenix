import React from "react";
import { connect } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import { updateAttributeImage } from "../app/redux";
import { DEFAULT_ATTRIBUTE } from "../common/constants";
import { IAttribute } from "../common/interfaces";

interface IImageUploadBaseProps {
  img: string;
  attributeId: string;
}

interface IImageUploadReduxProps {
  attributeList?: { [key: string]: IAttribute };
}

interface IImageUploadProps
  extends IImageUploadBaseProps,
    Partial<IImageUploadReduxProps> {}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  toggleTodo: () => dispatch(),
});

const mapStateToProps = (state: any) => {
  return {
    attributeList: state.createFlow.attributes,
  };
};

export const ImageUpload = (props: IImageUploadProps) => {
  const dispatch = useAppDispatch();
  const selectFile: any = (event: any) => {
    dispatch(
      updateAttributeImage({
        attributeId: props.attributeId,
        image: event.target.files[0],
      })
    );
  };

  let attribute: any = props.attributeList
    ? props.attributeList[props.attributeId]
    : DEFAULT_ATTRIBUTE;

  console.log(props.attributeList);
  return (
    <div className="upload-container">
      <label
        htmlFor="file-upload"
        className="file-upload"
        title="Click to upload"
      >
        <p className="upload-button">Click to upload</p>
        <div>
          <img className="preview" src={attribute.imagePreview} alt="" />
        </div>
        {/* {message && (
      <div className="alert alert-secondary mt-3" role="alert">
        {message}
      </div>
    )} */}
        <input
          title=""
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={selectFile}
          hidden
        />
      </label>
    </div>
  ); //<div>ImageUploadComponent {attribute["default"].imagePreview}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);

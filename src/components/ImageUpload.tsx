import React from "react";
import { connect } from "react-redux";
import { IAttribute } from "../common/interfaces";

interface IImageUploadBaseProps {
  img: string;
  attributeId: string;
}

interface IImageUploadReduxProps {
  attributeList: IAttribute[];
}

interface IImageUploadProps
  extends IImageUploadBaseProps,
    IImageUploadReduxProps {}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  toggleTodo: () => dispatch(),
});

const mapStateToProps = () => ({});

export const ImageUpload = (props: IImageUploadProps) => {
  return <div>ImageUpload</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);

import { IAttribute, IFormData } from "../../../common/interfaces";
import "../Artist.css";
import { connect } from "react-redux";
import ProgressBar from "../progressBar";

interface IMintCollectionPageBaseProps {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
}

interface IMintCollectionPageReduxProps {
  attributeList?: { [key: string]: IAttribute };
}

interface IMintCollectionPageProps
  extends IMintCollectionPageBaseProps,
    Partial<IMintCollectionPageReduxProps> {}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  toggleTodo: () => dispatch(),
});

const mapStateToProps = (state: any) => {
  return {
    attributeList: state.createFlow.attributes,
  };
};

function MintCollectionPage(props: IMintCollectionPageProps) {
  let imgArray = [];
  if (props.attributeList) {
    for (const key in props.attributeList) {
      if (props.attributeList[key].isCompleted)
        imgArray.push(props.attributeList[key].imagePreview);
    }
  }
  return (
    <div className="flex flex-cols-3 w-full p-5 gap-5 place-items-top">
      <ProgressBar stepNumber={6} />
      <p>these images will be combined into the NFT collection</p>
      {imgArray.map((tempImg) => {
        return <img className="img-container" src={tempImg} alt="" />;
      })}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MintCollectionPage);

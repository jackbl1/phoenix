import { IAttribute, IFormData } from "../../../common/interfaces";
import "../Artist.css";
import { connect } from "react-redux";
import ProgressBar from "../progressBar";
import mergeImages from "merge-images";
import att1 from "../../../assets/sample-nft-images/att1.png";
import att2 from "../../../assets/sample-nft-images/att2.png";
import att3 from "../../../assets/sample-nft-images/att3.png";

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

  mergeImages(imgArray).then(
    (b64) =>
      ((
        document.querySelector("img[src='temp.png']")! as HTMLImageElement
      ).src = b64)
  );

  return (
    <div className="grid grid-cols-4 w-full p-5 gap-5 place-items-top text-center">
      <ProgressBar stepNumber={6} />
      <div className="col-start-2 w-max">
        <p className="font-patrick text-3xl text-secondary m-3">
          This shows the series of images and the final NFT(s).
        </p>
        <div className="carousel rounded-box w-auto place-items-center bg-base-100 p-5 shadow">
          <div className="carousel-item">
            {imgArray.map((tempImg) => {
              return (
                <img
                  className="card outline outline-warning m-2"
                  src={tempImg}
                  alt=""
                />
              );
            })}
          </div>
          <div className="carousel-item">
            <img className="img-container" src="temp.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MintCollectionPage);

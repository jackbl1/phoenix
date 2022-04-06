import { ATTRIBUTETEXT } from "../../common/constants";
import exampleImage from "../../assets/NFT-example.png";
import ImageUpload from "../../common/ImageUpload";

interface IPage4Props {
  guide: boolean;
  guideHandler: (input: boolean) => void;
}

function Page4(props: IPage4Props) {
  return (
    <div className="artist-flow">
      <div className="row">
        <button
          className={props.guide ? "selected-button" : "unselected-button"}
          onClick={() => props.guideHandler(true)}
        >
          Descriptive text please!
        </button>
        <button
          className={props.guide ? "unselected-button" : "selected-button"}
          onClick={() => props.guideHandler(false)}
        >
          I got this, thanks
        </button>
      </div>
      <div className="row">
        {props.guide && (
          <div>
            <p className="artist-header">What is an attribute? </p>
            {ATTRIBUTETEXT}
          </div>
        )}
      </div>
      <div className="row">
        Example:
        <img src={exampleImage} />
      </div>
    </div>
  );
}

export default Page4;

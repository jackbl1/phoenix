import { ATTRIBUTETEXT } from "../../common/constants";
import exampleImage from "../../assets/NFT-example.png";
import ImageUpload from "../../common/ImageUpload";

function Page4(guide: any, setGuide: any) {
  return (
    <div className="artist-flow">
      <div className="row">
        <button
          className={guide ? "selected-button" : "unselected-button"}
          onClick={() => setGuide(true)}
        >
          Descriptive text please!
        </button>
        <button
          className={guide ? "unselected-button" : "selected-button"}
          onClick={() => setGuide(false)}
        >
          I got this, thanks
        </button>
      </div>
      <div className="row">
        {guide && (
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

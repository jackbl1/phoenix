import { BASE_FILE_TEXT } from "../../common/constantsText";
import backgroundImage from "../../assets/NFT-background.png";
import { BASE_FILE_EXAMPLE_TEXT } from "../../common/constantsText";
import ImageUpload from "../../components/ImageUpload";

interface IPage3Props {
  guide: boolean;
  guideHandler: (input: boolean) => void;
  baseImageFile: any;
  setBaseImageFile: (input: any) => void;
  baseImagePreview: any;
  setBaseImagePreview: (input: any) => void;
}

export function Page3(props: IPage3Props) {
  return (
    <div className="artist-flow">
      <div className="toggle-row">
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
        <div className="col">
          <div className="dark-container">
            <p className="container-title">Base File for the NFT</p>
            <ImageUpload attributeId="Base" />
            {/* <BaseImageUpload
              baseImageFile={props.baseImageFile}
              setBaseImageFile={props.setBaseImageFile}
              baseImagePreview={props.baseImagePreview}
              setBaseImagePreview={props.setBaseImagePreview}
            /> */}
          </div>
        </div>
        <div className="col">
          {props.guide && (
            <div>
              <p className="artist-subheader">What is this? </p>
              <p className="descriptionParagraph">{BASE_FILE_TEXT}</p>
            </div>
          )}
        </div>
      </div>
      {props.guide && (
        <>
          <div className="exampleText">Example:</div>
          <div className="row">
            <div className="col">
              <img className="dark-container" src={backgroundImage} />
            </div>
            <div className="col">
              <p className="artist-subheader">What makes a good Base File? </p>
              <p className="descriptionParagraph">{BASE_FILE_EXAMPLE_TEXT}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

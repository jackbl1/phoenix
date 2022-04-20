import { BASE_FILE_TEXT } from "../../common/constants";
import backgroundImage from "../../assets/NFT-background.png";
import BaseImageUpload from "../../common/BaseImageUpload";

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
        <div className="column">
          <div className="dark-container">
            Base File for the NFT
            <BaseImageUpload
              baseImageFile={props.baseImageFile}
              setBaseImageFile={props.setBaseImageFile}
              baseImagePreview={props.baseImagePreview}
              setBaseImagePreview={props.setBaseImagePreview}
            />
          </div>
        </div>
        <div className="column">
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
              <img className="exampleImage" src={backgroundImage} />
          </div>{" "}
        </>
      )}
    </div>
  );
}

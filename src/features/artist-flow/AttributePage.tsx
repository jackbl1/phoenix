import {
  ATTRIBUTE_TEXT,
  ATTRIBUTE_CATEGORY_TEXT,
  DEFINE_ATTRIBUTE_TEXT,
  ATTRIBUTE_FILE_TEXT,
  WHAT_ATTRIBUTE_TEXT,
} from "../../common/constants";
import exampleImage from "../../assets/NFT-example.png";
import ImageUpload from "../../common/ImageUpload";
import "../Styling.css";
import RealWorldLink from "./RealWorldLink";

interface IAttributePageProps {
  guide: boolean;
  guideHandler: (input: boolean) => void;
  curFile: any;
  setCurFile: (input: any) => void;
  imgPreview: any;
  setImgPreview: (input: any) => void;
}

function AttributePage(props: IAttributePageProps) {
  return (
    <>
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
        {props.guide ? (
          <>
            <div className="row">
              <div>
                <p className="Home-title-container">What is an attribute? </p>
                {ATTRIBUTE_TEXT}
              </div>
            </div>
            <div className="row">
              Example:
              <img src={exampleImage} />
            </div>
            <div className="row">
              <div className="dark-container">
                Attribute Category
                <div className="light-container">
                  <input
                    className="input-style-short"
                    placeholder="Ex. glasses, background"
                  />
                </div>
              </div>
              <div>
                <p className="Home-title-container">
                  What is an attribute category?
                </p>
                {ATTRIBUTE_CATEGORY_TEXT}
              </div>
            </div>
            <RealWorldLink guide={props.guide} />{" "}
          </>
        ) : (
          <div className="row">
            <div className="dark-container">
              Attribute Category
              <div className="light-container">
                <input
                  className="input-style-short"
                  placeholder="Ex. glasses, background"
                />
              </div>
            </div>
            <RealWorldLink guide={props.guide} />
          </div>
        )}
        {props.guide ? (
          <>
            <p className="Home-title-container">
              Now to define the attributes in this category.
            </p>
            {DEFINE_ATTRIBUTE_TEXT}
            <div className="row">
              <div className="dark-container">
                Attribute File
                <ImageUpload
                  curFile={props.curFile}
                  setCurFile={props.setCurFile}
                  imgPreview={props.imgPreview}
                  setImgPreview={props.setImgPreview}
                />
              </div>
              <div>
                <p className="Home-title-container">
                  What is an attribute file?
                </p>
                {ATTRIBUTE_FILE_TEXT}
              </div>
            </div>
            <div className="row">
              <div className="dark-container">
                Attribute <br />
                <div className="col">
                  <input type="radio" name="buttonGroup" value="one" id="one" />
                  <label className="radio-label" htmlFor="one">
                    VIP
                  </label>
                  <input type="radio" name="buttonGroup" value="two" id="two" />
                  <label className="radio-label" htmlFor="two">
                    Deluxe
                  </label>
                  <input
                    type="radio"
                    name="buttonGroup"
                    value="three"
                    id="three"
                  />
                  <label className="radio-label" htmlFor="three">
                    GA
                  </label>
                  <input
                    type="radio"
                    name="buttonGroup"
                    value="four"
                    id="four"
                  />
                  <label className="radio-label" htmlFor="four">
                    Lawn
                  </label>
                </div>
              </div>
              <div>
                <p className="Home-title-container">What is the attribute?</p>
                {WHAT_ATTRIBUTE_TEXT}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <div className="dark-container">
                Attribute File
                <ImageUpload
                  curFile={props.curFile}
                  setCurFile={props.setCurFile}
                  imgPreview={props.imgPreview}
                  setImgPreview={props.setImgPreview}
                />
              </div>
              <div className="dark-container">
                Attribute <br />
                <div className="col">
                  <input type="radio" name="buttonGroup" value="one" id="one" />
                  <label className="radio-label" htmlFor="one">
                    VIP
                  </label>
                  <input type="radio" name="buttonGroup" value="two" id="two" />
                  <label className="radio-label" htmlFor="two">
                    Deluxe
                  </label>
                  <input
                    type="radio"
                    name="buttonGroup"
                    value="three"
                    id="three"
                  />
                  <label className="radio-label" htmlFor="three">
                    GA
                  </label>
                  <input
                    type="radio"
                    name="buttonGroup"
                    value="four"
                    id="four"
                  />
                  <label className="radio-label" htmlFor="four">
                    Lawn
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AttributePage;

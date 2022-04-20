import {
  ATTRIBUTE_TEXT,
  ATTRIBUTE_CATEGORY_TEXT,
  DEFINE_ATTRIBUTE_TEXT,
  ATTRIBUTE_FILE_TEXT,
  WHAT_ATTRIBUTE_TEXT,
} from "../../common/constants";
import exampleImage from "../../assets/NFT-example.png";
import ImageUpload from "../../common/BaseImageUpload";
import "../Styling.css";
import RealWorldLink from "./RealWorldLink";
import AttributeImageUpload from "../../common/AttributeImageUpload";

interface IAttributePageProps {
  guide: boolean;
  guideHandler: (input: boolean) => void;
  attributeImageFile: any;
  setAttributeImageFile: (input: any) => void;
  attributeImagePreview: any;
  setAttributeImagePreview: (input: any) => void;
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
                <p className="artist-subheader">What is an Attribute? </p>
                <p className="descriptionParagraph">{ATTRIBUTE_TEXT}</p>
              </div>
            </div>
            <div className="row">
              Example:
              <img src={exampleImage} />
            </div>
            <div className="row">
              <div className="dark-container">
                Attribute Category
                <div className="CategoryChoser">
                  <input
                    className="input-style-short"
                    placeholder="Ex. glasses, background"
                  />
                </div>
              </div>
              <div>
                <p className="artist-subheader">
                  What is an attribute category?
                </p>
                <p className="descriptionParagraph">{ATTRIBUTE_CATEGORY_TEXT}</p>
              </div>
            </div>
            <RealWorldLink guide={props.guide} />{" "}
          </>
        ) : (
          <div className="row">
            <div className="dark-container">
              Attribute Category
                <input
                  className="input-style-short"
                  placeholder="Ex. glasses, background"
                />
            </div>
              <RealWorldLink guide={props.guide} />
          </div>
        )}
        {props.guide ? (
          <>
            <p className="artist-subheader">
              Now to define the attributes in this category.
            </p>
            <p className="descriptionParagraph">{DEFINE_ATTRIBUTE_TEXT}</p>
            <div className="row">
              <div className="dark-container">
                Attribute File
                <AttributeImageUpload
                  attributeImageFile={props.attributeImageFile}
                  setAttributeImageFile={props.setAttributeImageFile}
                  attributeImagePreview={props.attributeImagePreview}
                  setAttributeImagePreview={props.setAttributeImagePreview}
                />
              </div>
              <div>
                <p className="artist-subheader">
                  What is an attribute file?
                </p>
                <p className="descriptionParagraph">{ATTRIBUTE_FILE_TEXT}</p>
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
                <p className="artist-subheader">What is the attribute?</p>
                <p className="descriptionParagraph">{WHAT_ATTRIBUTE_TEXT}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <div className="dark-container">
                Attribute File
                <AttributeImageUpload
                  attributeImageFile={props.attributeImageFile}
                  setAttributeImageFile={props.setAttributeImageFile}
                  attributeImagePreview={props.attributeImagePreview}
                  setAttributeImagePreview={props.setAttributeImagePreview}
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

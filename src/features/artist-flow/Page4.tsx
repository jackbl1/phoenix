import {
  ATTRIBUTE_TEXT,
  ATTRIBUTE_CATEGORY_TEXT,
  REAL_WORLD_LINK_TEXT,
  DEFINE_ATTRIBUTE_TEXT,
  ATTRIBUTE_FILE_TEXT,
  WHAT_ATTRIBUTE_TEXT,
} from "../../common/constants";
import exampleImage from "../../assets/NFT-example.png";
import ImageUpload from "../../common/ImageUpload";
import "../Styling.css";

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
      {props.guide && (
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
        </>
      )}
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
        {props.guide && (
          <div>
            <p className="Home-title-container">
              What is an attribute category?
            </p>
            {ATTRIBUTE_CATEGORY_TEXT}
          </div>
        )}
      </div>
      <div className="row">
        <div className="dark-container">
          Real World Link
          <div className="light-container">
            <input className="input-style-short" placeholder="Buy date" />
            <input className="input-style-short" placeholder="City" />
            <input className="input-style-short" placeholder="Seating Level" />
            <input className="input-style-short" placeholder="State" />
            <input className="input-style-short" placeholder="Venue" />
            <input className="input-style-short" placeholder="Opener" />
            <input className="input-style-short" placeholder="Event Date" />
          </div>
        </div>
        {props.guide && (
          <div>
            <p className="Home-title-container">What is the real world link?</p>
            {REAL_WORLD_LINK_TEXT}
          </div>
        )}
      </div>
      {props.guide && (
        <div className="row">
          <div>
            <p className="Home-title-container">
              Now to define the attributes in this category.
            </p>
            {DEFINE_ATTRIBUTE_TEXT}
          </div>
        </div>
      )}
      <div className="row">
        <div className="dark-container">
          Attribute File
          <ImageUpload />
        </div>
        {props.guide && (
          <div>
            <p className="Home-title-container">What is an attribute file?</p>
            {ATTRIBUTE_FILE_TEXT}
          </div>
        )}
      </div>
      <div className="row">
        <div className="dark-container">
          Attribute <br />
          <input type="radio" name="buttonGroup" value="one" id="one" />
          <label htmlFor="one">VIP</label>
          <input type="radio" name="buttonGroup" value="two" id="two" />
          <label htmlFor="two">Deluxe</label>
          <input type="radio" name="buttonGroup" value="three" id="three" />
          <label htmlFor="three">GA</label>
          <input type="radio" name="buttonGroup" value="four" id="four" />
          <label htmlFor="four">Lawn</label>
        </div>
        {props.guide && (
          <div>
            <p className="Home-title-container">What is the attribute?</p>
            {WHAT_ATTRIBUTE_TEXT}
          </div>
        )}
      </div>
    </div>
  );
}

export default Page4;

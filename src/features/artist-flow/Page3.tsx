import { useState } from "react";
import { BASEFILETEXT } from "../../common/constants";
import backgroundImage from "../../assets/NFT-background.png";
import ImageUpload from "../../common/ImageUpload";

function Page3(guide: any, setGuide: any) {
  return (
    <div className="artist-flow">
      <div className="toggle-row">
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
        <div className="column">
          <div className="dark-container">
            Base File for the NFT
            <ImageUpload />
          </div>
        </div>
        <div className="column">
          {guide && (
            <div>
              <p className="artist-header">What is this? </p>
              {BASEFILETEXT}
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img className="exampleImage" src={backgroundImage} />
        </div>
        <div className="column">
          <div className="exampleText">
            Example:
            </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;

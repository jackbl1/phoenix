import { useState } from "react";
import { BASEFILETEXT } from "../../common/constants";
import backgroundImage from "../../assets/NFT-background.png";
import ImageUpload from "../../common/ImageUpload";

export function Page3(
  guide: boolean,
  guideHandler: (setting: boolean) => void
) {
  return (
    <div className="artist-flow">
      <div className="row">
        <button
          className={guide ? "selected-button" : "unselected-button"}
          onClick={() => guideHandler(true)}
        >
          Descriptive text please!
        </button>
        <button
          className={guide ? "unselected-button" : "selected-button"}
          onClick={() => guideHandler(false)}
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
        Example:
        <img src={backgroundImage} />
      </div>
    </div>
  );
}

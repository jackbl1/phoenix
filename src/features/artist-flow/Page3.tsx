import { useState } from "react";
import { BASEFILETEXT } from "../../common/constants";
import backgroundImage from "../../assets/NFT-background.png";
import ImageUpload from "../../common/ImageUpload";

interface IPage3Props {
  guide: boolean;
  guideHandler: (input: boolean) => void;
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
            <ImageUpload />
          </div>
        </div>
        <div className="column">
          {props.guide && (
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
          <div className="exampleText">Example:</div>
        </div>
      </div>
    </div>
  );
}

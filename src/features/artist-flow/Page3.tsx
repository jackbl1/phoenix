import { useState } from "react";
import { BASEFILETEXT } from "../../common/constants";
import ImageUpload from "../../common/ImageUpload";

function Page3(formData: any, setFormData: any) {
  const [guide, setGuide] = useState(true);
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
    </div>
  );
}

export default Page3;

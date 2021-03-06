import { BASE_FILE_TEXT } from "../../../common/constantsText";
import backgroundImage from "../../../assets/NFT-background.png";
import { BASE_FILE_EXAMPLE_TEXT } from "../../../common/constantsText";
import ImageUpload from "../../../components/ImageUpload";
import ProgressBar from "../progressBar";

interface IBaseAttributePageProps {
  guide: boolean;
  guideHandler: (input: boolean) => void;
}

export function BaseAttributePage(props: IBaseAttributePageProps) {
  return (
    <div className="grid grid-cols-3 w-full p-5 gap-5 place-items-top">
      <ProgressBar stepNumber={2} />

      <div className="rows-span-2 mx-auto">
        <div
          className="tooltip"
          data-tip="Text to explain what the heck you're supposed to do."
        >
          <button
            className="btn btn-outline btn-secondary m-2"
            onClick={() => props.guideHandler(true)}
          >
            Add Descriptive Text!
          </button>
        </div>
        <div className="tooltip" data-tip="Been there, Done that.">
          <button
            className="btn btn-outline btn-warning m-2"
            onClick={() => props.guideHandler(false)}
          >
            I got this, thanks.
          </button>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl m-2">
          <div className="card-body items-center text-center">
            <h2 className="card-title font-xl font-patrick">
              Base File for the NFT
            </h2>
            <div className="card-actions">
              <ImageUpload attributeId="Base" />
            </div>
            {props.guide && (
              <div>
                <p className="artist-subheader">What is this? </p>
                <p className="descriptionParagraph">{BASE_FILE_TEXT}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {props.guide && (
        <>
          <div className="card w-96 bg-base-100 shadow-xl m-5 mx-auto">
            <figure className="px-10 pt-10">
              <img src={backgroundImage} alt="Example" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-xl font-patrick">
                Example Base File
              </h2>
              <div className="card-actions"></div>
              {props.guide && (
                <div>
                  <p className="artist-subheader">
                    What makes a good Base File?
                  </p>
                  <p className="descriptionParagraph">
                    {BASE_FILE_EXAMPLE_TEXT}
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

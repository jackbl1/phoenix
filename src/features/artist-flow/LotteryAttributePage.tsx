import {
  ATTRIBUTE_CATEGORY_TEXT,
  ATTRIBUTE_FILE_TEXT,
  DISTRIBUTION_TABLE_TEXT,
  LOTTERY_ATTRIBUTE_TEXT,
  REAL_WORLD_LINK_LOTTERY_TEXT,
} from "../../common/constants";
import exampleImage from "../../assets/NFT-example.png";
import ImageUpload from "../../common/ImageUpload";
import "../Styling.css";
import DistributedPer from "./DistributedPer";
import DistributionTable from "./DistributionTable";

interface ILotteryAttributePageProps {
  guide: boolean;
  guideHandler: (input: boolean) => void;
  curFile: any;
  setCurFile: (input: any) => void;
  imgPreview: any;
  setImgPreview: (input: any) => void;
}

function LotteryAttributePage(props: ILotteryAttributePageProps) {
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
                <p className="Home-title-container">
                  What is a lottery attribute?{" "}
                </p>
                {LOTTERY_ATTRIBUTE_TEXT}
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
            <div className="row">
              <div className="dark-container">
                Real World Value
                <div className="light-container">
                  <input
                    className="input-style-short"
                    placeholder="ex. Meet & Greet, Seat Upgrade"
                  />
                </div>
              </div>
              <div>
                <p className="Home-title-container">
                  What is the real world link
                </p>
                {REAL_WORLD_LINK_LOTTERY_TEXT}
              </div>
            </div>
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
            <div className="dark-container">
              Real World Value
              <div className="light-container">
                <input
                  className="input-style-short"
                  placeholder="ex. Meet & Greet, Seat Upgrade"
                />
              </div>
            </div>
          </div>
        )}
        {props.guide ? (
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
              <div>
                <p className="Home-title-container">
                  What is an attribute file?
                </p>
                {ATTRIBUTE_FILE_TEXT}
              </div>
            </div>
            <div className="row">
              <DistributedPer guide={props.guide} />
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
              <DistributedPer guide={props.guide} />
            </div>
          </>
        )}
        {props.guide && (
          <div>
            <p className="Home-title-container">What is this table?</p>
            {DISTRIBUTION_TABLE_TEXT}
          </div>
        )}
        <DistributionTable />
      </div>
    </>
  );
}

export default LotteryAttributePage;

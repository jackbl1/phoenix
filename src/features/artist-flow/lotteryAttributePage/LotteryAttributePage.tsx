import {
  ATTRIBUTE_CATEGORY_TEXT,
  ATTRIBUTE_FILE_TEXT,
  DISTRIBUTION_TABLE_TEXT,
  LOTTERY_ATTRIBUTE_TEXT,
  REAL_WORLD_LINK_LOTTERY_TEXT,
} from "../../../common/constantsText";
import exampleImage from "../../../assets/NFT-example.png";
import "../Artist.css";
import DistributedPer from "./DistributedPer";
import DistributionTable from "./DistributionTable";
import LotteryImageUpload from "../../../components/LotteryImageUpload";
import { IFormData } from "../../../common/interfaces";
import { useState } from "react";
import { LOTTERY_EXAMPLE_TEXT } from "../../../common/constantsText";
import ImageUpload from "../../../components/ImageUpload";

interface ILotteryAttributePageProps {
  guide: boolean;
  guideHandler: (input: boolean) => void;
  formData: IFormData;
}

function LotteryAttributePage(props: ILotteryAttributePageProps) {
  const [currentAttribute, setCurrentAttribute] = useState("");
  return (
    <>
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
        {props.guide ? (
          <>
            <div className="row">
              <div>
                <p className="artist-subheader">
                  What is a lottery attribute?{" "}
                </p>
                <p className="descriptionParagraph">{LOTTERY_ATTRIBUTE_TEXT}</p>
              </div>
            </div>
            <div className="exampleText">Example:</div>
            <div className="row">
              <div className="col">
                <img className="dark-container" src={exampleImage} />
              </div>
              <div className="col">
                <p className="artist-subheader">
                  What makes a good Lottery Attribute?
                </p>
                <p className="descriptionParagraph">{LOTTERY_EXAMPLE_TEXT}</p>
              </div>
            </div>
            <div className="row">
              <div className="dark-container">
                <p className="container-title">Attribute Category</p>
                <div>
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
                <p className="descriptionParagraph">
                  {ATTRIBUTE_CATEGORY_TEXT}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="dark-container">
                <p className="container-title">Real World Value</p>
                <div>
                  <input
                    className="input-style-short"
                    placeholder="ex. Meet & Greet, Seat Upgrade"
                  />
                </div>
              </div>
              <div>
                <p className="artist-subheader">What is the real world link</p>
                <p className="descriptionParagraph">
                  {REAL_WORLD_LINK_LOTTERY_TEXT}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="row">
            <div className="column">
              <div className="dark-container">
                <p className="container-title">Attribute Category</p>
                <div className="">
                  <input
                    className="input-style-short"
                    placeholder="Ex. glasses, background"
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="dark-container">
                <p className="container-title">Real World Value</p>
                <div className="">
                  <input
                    className="input-style-short"
                    placeholder="ex. Meet & Greet, Seat Upgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {props.guide ? (
          <>
            <div className="row">
              <div className="dark-container">
                <p className="container-title">Attribute Image</p>
                <ImageUpload attributeId={currentAttribute} />
              </div>
              <div>
                <p className="artist-subheader">What is an attribute file?</p>
                <p className="descriptionParagraph">{ATTRIBUTE_FILE_TEXT}</p>
              </div>
            </div>
            <DistributedPer
              guide={props.guide}
              formData={props.formData}
              setCurrentAttribute={setCurrentAttribute}
            />
          </>
        ) : (
          <>
            <div className="row">
              <div className="dark-container">
                <div className="column">
                  <p className="container-title">Attribute Image</p>
                  <ImageUpload attributeId={currentAttribute} />
                </div>
              </div>
              <div className="column">
                <DistributedPer
                  guide={props.guide}
                  formData={props.formData}
                  setCurrentAttribute={setCurrentAttribute}
                />
              </div>
            </div>
          </>
        )}
        {props.guide && (
          <div>
            <p className="artist-subheader">What is this table?</p>
            <p className="descriptionParagraph">{DISTRIBUTION_TABLE_TEXT}</p>
          </div>
        )}
        <div className="row">
          <DistributionTable
            formData={props.formData}
            currentAttribute={currentAttribute}
          />
        </div>
      </div>
    </>
  );
}

export default LotteryAttributePage;
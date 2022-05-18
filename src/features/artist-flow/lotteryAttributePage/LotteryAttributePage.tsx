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
import { IAttribute, IFormData } from "../../../common/interfaces";
import { useState } from "react";
import { LOTTERY_EXAMPLE_TEXT } from "../../../common/constantsText";
import ImageUpload from "../../../components/ImageUpload";
import { connect } from "react-redux";
import React from "react";
import { AttributesList } from "../../../common/constants";
import LotteryAttributeSummary from "../summaryPage/LotteryAttributeSummary";
import { completeAttribute, setLotteryAttribute } from "../../../app/redux";

interface ILotteryAttributePageBaseProps {
  guide: boolean;
  guideHandler: (input: boolean) => void;
  formData: IFormData;
}

interface ILotteryAttributePageReduxProps {
  attributeList: { [key: string]: IAttribute };
}

interface ILotteryAttributePageProps
  extends ILotteryAttributePageBaseProps,
    Partial<ILotteryAttributePageReduxProps> {}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  toggleTodo: () => dispatch(),
});

const mapStateToProps = (state: any) => {
  return {
    attributeList: state.createFlow.attributes,
  };
};

function LotteryAttributePage(props: ILotteryAttributePageProps) {
  const [currentAttribute, setCurrentAttribute] = useState("");
  const [attributeErrorMessage, setAttributeErrorMessage] = useState("");
  const [completedAttributes, setCompletedAttributes] = useState([<></>]);
  const [completedAttributes2, setCompletedAttributes2] = useState([""]);

  const handleAddAttribute = () => {
    setAttributeErrorMessage("");
    if (
      props.attributeList &&
      (currentAttribute === "" ||
        !props.attributeList[currentAttribute].imageFile ||
        !props.attributeList[currentAttribute].data)
    ) {
      setAttributeErrorMessage(
        "Please complete this attribute before adding another"
      );
    } else {
      let tempAttributes = [...completedAttributes];
      let tempData = props.attributeList
        ? props.attributeList[currentAttribute].data
        : "";
      tempAttributes.push(
        <LotteryAttributeSummary
          attributeConst={currentAttribute}
          attributeLabel={currentAttribute}
          attributeVal={tempData ? tempData : ""}
        />
      );
      setCompletedAttributes(tempAttributes);
      setCompletedAttributes2([...completedAttributes2, currentAttribute]);
      if (props.attributeList) {
        dispatch(completeAttribute(currentAttribute));
        dispatch(setLotteryAttribute(currentAttribute));
      }
      setCurrentAttribute("");
    }
  };

  React.useEffect(() => {
    AttributesList.forEach((tempAttribute) => {
      if (
        props.attributeList &&
        props.attributeList[tempAttribute].isCompleted &&
        props.attributeList[tempAttribute].isLottery
      ) {
        let tempAttributes = [...completedAttributes];
        let tempData = props.attributeList
          ? props.attributeList[tempAttribute].data
          : "";
        tempAttributes.push(
          <LotteryAttributeSummary
            attributeConst={tempAttribute}
            attributeLabel={tempAttribute}
            attributeVal={tempData ? tempData : ""}
          />
        );
        setCompletedAttributes(tempAttributes);
        setCompletedAttributes2([...completedAttributes2, tempAttribute]);
      }
    });
  }, []);

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
              completedAttributes={completedAttributes2}
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
                  completedAttributes={completedAttributes2}
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
        <p className="error">{attributeErrorMessage}</p>
        <button onClick={handleAddAttribute} className="addAnotherButton">
          + add another?
        </button>
      </div>
      {completedAttributes.length > 0 && (
        <>
          <p className="artist-subheader">Completed Attributes</p>
          <div className="row">
            {completedAttributes.map((curAttribute) => {
              return curAttribute;
            })}
          </div>
        </>
      )}
    </>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LotteryAttributePage);
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

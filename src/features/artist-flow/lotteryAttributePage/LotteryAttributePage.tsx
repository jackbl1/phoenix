import {
  ATTRIBUTE_CATEGORY_TEXT,
  ATTRIBUTE_FILE_TEXT,
  DISTRIBUTION_TABLE_TEXT,
  LOTTERY_ATTRIBUTE_TEXT,
  REAL_WORLD_LINK_LOTTERY_TEXT,
  WHAT_ATTRIBUTE_TEXT
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
import AttributeSummary from "../summaryPage/AttributeSummary";

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
  const [grayedOutAttributes, setGrayedOutAttributes] = useState([""]);

  const handleAddAttribute = () => {
    setAttributeErrorMessage("");
    if (
      props.attributeList &&
      (currentAttribute === "" ||
        !props.attributeList[currentAttribute].imageFile) //||
      //!props.attributeList[currentAttribute].data)
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
      setGrayedOutAttributes([...grayedOutAttributes, currentAttribute]);
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
        props.attributeList[tempAttribute].isCompleted
        //&& props.attributeList[tempAttribute].isLottery
      ) {
        let tempAttributes = [...completedAttributes];
        let tempData = props.attributeList
          ? props.attributeList[tempAttribute].data
          : "";
        if (props.attributeList[tempAttribute].isLottery) {
          tempAttributes.push(
            <LotteryAttributeSummary
              attributeConst={tempAttribute}
              attributeLabel={tempAttribute}
              attributeVal={tempData ? tempData : ""}
            />
          );
        } else {
          tempAttributes.push(
            <AttributeSummary
              attributeConst={tempAttribute}
              attributeLabel={tempAttribute}
              attributeVal={tempData ? tempData : ""}
            />
          );
        }
        setGrayedOutAttributes([...grayedOutAttributes, tempAttribute]);
        setCompletedAttributes(tempAttributes);
      }
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 w-full p-5 gap-5 place-items-top flex flex-wrap">
        <ul className="steps steps-vertical">
          <li className="step step-success">Event Information</li>
          <li className="step step-success">Base Image</li>
          <li className="step step-success">Solid Attributes</li>
          <li className="step step-warning">Lottery Attributes</li>
          <li className="step">Confirm and Finish</li>
        </ul>

        <div className="rows-span-1">
          <div className="tooltip" data-tip="Text to explain what the heck you're supposed to do.">
              <button className="btn btn-outline btn-primary m-2"
                onClick={() => props.guideHandler(true)}
              >
                Add Descriptive Text!
              </button>
            </div>
            <div className="tooltip" data-tip="Been there, Done that.">
              <button className="btn btn-outline btn-warning m-2"
                onClick={() => props.guideHandler(false)}
              >
                I got this, thanks.
              </button>
            </div>

        {props.guide ? (
          <>
          <div className="grid grid-cols-2 w-full p-5 gap-10 place-items-center flex flex-wrap">
            <div className="card w-96 bg-base-100 shadow-xl mr-60 m-5">
              <div className="card-body items-center text-center">
                <div className="card-actions">
                </div>
                {props.guide && (
                  <div>
                    <p className="artist-subheader">What is a lottery attribute?</p>
                    <p className="descriptionParagraph">{LOTTERY_ATTRIBUTE_TEXT}</p>
                  </div>
              )}
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
              <figure className="px-10 pt-10">
                <img src={exampleImage} alt="Example Image" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-xl font-patrick">Example Lottery</h2>
                <div className="card-actions">
                </div>
                {props.guide && (
                  <div>
                    <p className="artist-subheader">What makes a good lottery Attribute file?</p>
                    <p className="descriptionParagraph">{LOTTERY_EXAMPLE_TEXT}</p>
                  </div>
              )}
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl mr-60 m-5">
              <figure className="px-10 pt-10">
              <div className="form-control">
                  <div className="form-control w-full max-w-xs">
                        <span className="label-text font-patrick text-lg font-primary">Lottery Category</span>
                        <label className="label">
                        </label>
                        <input type="text" placeholder="Ex. glasses, background" className="input input-bordered input-warning w-full max-w-xs p-5" />
                    </div>
                  </div>  
                  </figure>
                <div className="card-body items-center text-center">
                {props.guide && (
                  <div>
                    <p className="artist-subheader">How to decide categories?</p>
                    <p className="descriptionParagraph">{ATTRIBUTE_CATEGORY_TEXT}</p>
                  </div>
              )}
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
              <figure className="px-10 pt-10">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                      <span className="label-text font-patrick text-lg font-primary">Real World Link</span>
                      </label>
                      <select className="select select-bordered select-warning">
                        <option disabled selected>Pick one</option>
                        <option>Jack</option>
                        <option>Please</option>
                        <option>Help</option>
                        <option>Me</option>
                        <option>Sit on my face</option>
                      </select>
                </div>
                  </figure>
                <div className="card-body items-center text-center">
                {props.guide && (
                  <div>
                    <p className="artist-subheader">What is this?</p>
                    <p className="descriptionParagraph">{REAL_WORLD_LINK_LOTTERY_TEXT}</p>
                  </div>
              )}
              </div>
            </div>
          </div>
          </>
        ) : (
        <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
            <div className="card w-96 bg-base-100 shadow-xl mr-60 m-5">
              <figure className="px-10 pt-10">
              <div className="form-control">
                  <div className="form-control w-full max-w-xs">
                        <span className="label-text font-patrick text-lg font-primary">Lottery Category</span>
                        <label className="label">
                        </label>
                        <input type="text" placeholder="Ex. glasses, background" className="input input-bordered input-warning w-full max-w-xs p-5" />
                    </div>
                  </div>  
                  </figure>
                <div className="card-body items-center text-center">
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
              <figure className="px-10 pt-10">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                      <span className="label-text font-patrick text-lg font-primary">Real World Link</span>
                      </label>
                      <select className="select select-bordered select-warning">
                        <option disabled selected>Pick one</option>
                        <option>Jack</option>
                        <option>Please</option>
                        <option>Help</option>
                        <option>Me</option>
                        <option>Sit on my face</option>
                      </select>
                </div>
                  </figure>
                <div className="card-body items-center text-center">
              </div>
            </div>
        </div>
        )}
        {props.guide ? (
          <>
            <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
              <div className="card w-96 bg-base-100 shadow-xl mr-60 m-2">
                    <figure className="px-10 pt-10">
                      <img src="" alt="Upload Image" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title font-xl font-patrick">Lottery File</h2>
                      {props.guide && (
                        <div>
                          <p className="artist-subheader">What is this? </p>
                          <p className="descriptionParagraph">{ATTRIBUTE_FILE_TEXT}</p>
                        </div>
                      )}
                      <div className="card-actions">
                        <button className="btn btn-primary m-3">Upload</button>
                      </div>
                  </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
                  <figure className="px-10 pt-10">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                          <span className="label-text font-patrick text-lg font-primary">Lottery</span>
                          </label>
                          <select className="select select-bordered select-warning">
                            <option disabled selected>Pick one</option>
                            <option>Jack</option>
                            <option>Please</option>
                            <option>Help</option>
                            <option>Me</option>
                            <option>Sit on my face</option>
                          </select>
                    </div>
                      </figure>
                    <div className="card-body items-center text-center">
                    {props.guide && (
                      <div>
                        <p className="artist-subheader">What is this?</p>
                        <p className="descriptionParagraph">{WHAT_ATTRIBUTE_TEXT}</p>
                      </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
          <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
            <div className="card w-96 bg-base-100 shadow-xl mr-60">
                <figure className="px-10 pt-10">
                  <img src="" alt="Upload Image" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title font-xl font-patrick">Lottery File</h2>
                  <div className="card-actions">
                    <button className="btn btn-primary m-3">Upload</button>
                  </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
                  <figure className="px-10 pt-10">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                          <span className="label-text font-patrick text-lg font-primary">Lottery</span>
                          </label>
                          <select className="select select-bordered select-warning">
                            <option disabled selected>Pick one</option>
                            <option>Jack</option>
                            <option>Please</option>
                            <option>Help</option>
                            <option>Me</option>
                            <option>Sit on my face</option>
                          </select>
                    </div>
                      </figure>
                    <div className="card-body items-center text-center">
                </div>
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
        <button onClick={handleAddAttribute} className="btn btn-base-100">
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
        </div>
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

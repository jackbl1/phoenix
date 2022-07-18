import {
  WHAT_IS_NFT,
  NFT_NAME,
  NFT_FILE,
  HOW_MANY,
  LASTING_OWNERSHIP,
} from "../../../common/constantsText";
import { useState } from "react";
import { IAttribute, IFormData } from "../../../common/interfaces";
import CityAttribute from "../attributeSelectors/CityAttribute";
import EventDateAttribute from "../attributeSelectors/EventDateAttribute";
import OpenerAttribute from "../attributeSelectors/OpenerAttribute";
import StateAttribute from "../attributeSelectors/StateAttribute";
import VenueAttribute from "../attributeSelectors/VenueAttribute";
import BuyDateAttribute from "../attributeSelectors/BuyDateAttribute";
import { ATTRIBUTES, AttributesList } from "../../../common/constants";
import ImageUpload from "../../../components/ImageUpload";
import { connect } from "react-redux";
import AttributeSummary from "../summaryPage/AttributeSummary";
import { useAppDispatch } from "../../../app/hooks";
import { completeAttribute } from "../../../app/redux";
import React from "react";
import LotteryAttributeSummary from "../summaryPage/LotteryAttributeSummary";
import ProgressBar from "../progressBar";
import RealWorldLink from "./RealWorldLink";
import NFTGroup from "./NFTGrouping";


interface IAttributePageBaseProps {
  guide: boolean;
  guideHandler: (input: boolean) => void;
  setFormData: (input: IFormData) => void;
  setCurrentAttribute: any;
  formData: IFormData;
}

interface IAttributePageReduxProps {
  attributeList: { [key: string]: IAttribute };
}

interface IAttributePageProps
  extends IAttributePageBaseProps,
    Partial<IAttributePageReduxProps> {}


const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  toggleTodo: () => dispatch(),
});

const mapStateToProps = (state: any) => {
  return {
    attributeList: state.createFlow.attributes,
  };
};

function AttributePage(props: IAttributePageProps) {
  const [currentAttribute, setCurrentAttribute] = useState("");
  const [attributeErrorMessage, setAttributeErrorMessage] = useState("");
  const [grayedOutAttributes, setGrayedOutAttributes] = useState([""]);
  const [completedAttributes, setCompletedAttributes] = useState([<></>]);
  const dispatch = useAppDispatch();
  const attributeComponent = () => {
    if (currentAttribute === ATTRIBUTES.CITY) {
      return <CityAttribute city={props.formData.city} />;
    } else if (currentAttribute === ATTRIBUTES.EVENT_DATE) {
      return (
        <EventDateAttribute eventDate={props.formData.date.toDateString()} />
      );
    } else if (currentAttribute === ATTRIBUTES.OPENER) {
      return <OpenerAttribute opener={props.formData.opener} />;
    } else if (currentAttribute === ATTRIBUTES.BUY_DATE) {
      return <BuyDateAttribute buyDate={props.formData.buyDate} />;
    } else if (currentAttribute === ATTRIBUTES.STATE) {
      return <StateAttribute state={props.formData.state} />;
    } else if (currentAttribute === ATTRIBUTES.VENUE) {
      return <VenueAttribute venue={props.formData.venue} />;
    } else {
      return (
          <div className="text-secondary">
            Please select a link to define the attribute
          </div>
      );
    }
  };

  const handleAddAttribute = () => {
    setAttributeErrorMessage("");
    if (
      props.attributeList &&
      (currentAttribute === "" ||
        !props.attributeList[currentAttribute].imageFile ||
        props.attributeList[currentAttribute].data) //We need to add back the ! before this but needed it to work to submit to N&W
    ) {
      setAttributeErrorMessage(
        "Please complete the current attribute before adding another"
      );
    } else {
      let tempAttributes = [...completedAttributes];
      let tempData = props.attributeList
        ? props.attributeList[currentAttribute].data
        : "";
      tempAttributes.push(
        <AttributeSummary
          attributeConst={currentAttribute}
          attributeLabel={currentAttribute}
          attributeVal={tempData ? tempData : ""}
          isLottery={false}
        />
      );
      setCompletedAttributes(tempAttributes);
      setGrayedOutAttributes([...grayedOutAttributes, currentAttribute]);
      if (props.attributeList) dispatch(completeAttribute(currentAttribute));
      setCurrentAttribute("");
    }
  };

  React.useEffect(() => {
    AttributesList.forEach((tempAttribute) => {
      if (
        props.attributeList &&
        props.attributeList[tempAttribute].isCompleted
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
              isLottery={true}
            />
          );
        } else {
          tempAttributes.push(
            <AttributeSummary
              attributeConst={tempAttribute}
              attributeLabel={tempAttribute}
              attributeVal={tempData ? tempData : ""}
              isLottery={false}
            />
          );
        }

        setCompletedAttributes(tempAttributes);
        setGrayedOutAttributes([...grayedOutAttributes, tempAttribute]);
      }
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 w-full p-5 gap-5 place-items-top flex flex-wrap">
        <ProgressBar stepNumber={2} />
        <div className="rows-span-1">
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
          {props.guide ? (
            <>
                <div className="card w-full bg-base-100 shadow-xl m-5">
                  <div className="card-body items-center text-center">
                    <div className="card-actions"></div>
                    {props.guide && (
                      <div>
                        <p className="artist-subheader">
                          What to do here?
                        </p>
                        <p className="descriptionParagraph">{WHAT_IS_NFT}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
              <div className="card w-96 bg-base-100 shadow-xl mr-60 m-5">
                <figure className="px-10 pt-10">
                  <div className="form-control">
                    <div className="form-control w-full max-w-xs">
                      <span className="label-text font-patrick text-lg font-primary">
                        Name/Title
                      </span>
                      <label className="label"></label>
                      <input
                        type="text"
                        placeholder="Be Creative!"
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        onInput={() => {
                        }}
                      />
                    </div>
                  </div>
                </figure>
                  <div className="card-body items-center text-center">
                    {props.guide && (
                      <div>
                        <p className="artist-subheader">
                          How to decide a Name?
                        </p>
                        <p className="descriptionParagraph">
                          {NFT_NAME}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <NFTGroup
                  guide={props.guide}
                  setCurrentAttribute={setCurrentAttribute}
                  formData={props.formData}
                  completedAttributes={grayedOutAttributes}
                />

            </div>
            </>
          ) : (
            <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
              <div className="card w-96 bg-base-100 shadow-xl mr-60 m-5">
                <figure className="px-10 pt-10">
                  <div className="form-control">
                    <div className="form-control w-full max-w-xs">
                      <span className="label-text font-patrick text-lg font-primary">
                        Name/Title
                      </span>
                      <label className="label"></label>
                      <input
                        type="text"
                        placeholder="Be Creative!"
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                      />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center"></div>
              </div>

                <NFTGroup
                  guide={props.guide}
                  setCurrentAttribute={setCurrentAttribute}
                  formData={props.formData}
                  completedAttributes={grayedOutAttributes}
                />
            </div>
          )}
          {props.guide ? (
            <>
              <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
              <div className="card w-96 bg-base-100 shadow-xl mr-60 m-2">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title font-xl font-patrick">
                      NFT File
                    </h2>
                    <div className="card-actions">
                      <ImageUpload attributeId={currentAttribute} />
                    </div>
                    {props.guide && (
                      <div>
                        <p className="artist-subheader">What goes here?</p>
                        <p className="descriptionParagraph">
                          {NFT_FILE}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
                  <figure className="px-10 pt-10">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text font-patrick text-lg font-primary">
                         How Many?
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="How many of this specific NFT"
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        min="0"
                        max={props.formData.ticketNum}
                      />
                      </div>
                  </figure>
                  <div className="card-body items-center text-center">
                    {props.guide && (
                      <div>
                        <p className="artist-subheader">What is this?</p>
                        <p className="descriptionParagraph">
                          {HOW_MANY}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              <div className="card w-96 bg-base-100 shadow-xl mr-60 m-5">
                  <figure className="px-10 pt-10">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text font-patrick text-lg font-primary">
                         Lasting ownership % for you?
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="what % out of 100?"
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        min="0"
                        max="100"
                      />
                      </div>
                  </figure>
                  <div className="card-body items-center text-center">
                  {props.guide && (
                      <div>
                        <p className="artist-subheader">What is this?</p>
                        <p className="descriptionParagraph">
                          {LASTING_OWNERSHIP}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <button onClick={handleAddAttribute} className="btn btn-base-100 ml-60 w-full">
                + add another?
              </button>
              <div className="alert alert-warning shadow-lg">{attributeErrorMessage}</div>
              <div className="flex w-screen items-center">
              </div>
              </div>

            </>
          ) : (
            <>
              <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
                <div className="card w-96 bg-base-100 shadow-xl mr-60 m-2">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title font-xl font-patrick">
                      NFT File
                    </h2>
                    <div className="card-actions">
                      <ImageUpload attributeId={currentAttribute} />
                    </div>
                  </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
                  <figure className="px-10 pt-10">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text font-patrick text-lg font-primary">
                         How Many?
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="How many of this specific NFT"
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        min="0"
                        max={props.formData.ticketNum}
                      />
                      </div>
                  </figure>
                  <div className="card-body items-center text-center">
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
                  <figure className="px-10 pt-10">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text font-patrick text-lg font-primary">
                         Lasting ownership % for you?
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="what % out of 100?"
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        min="0"
                        max="100"
                      />
                      </div>
                  </figure>
                  <div className="card-body items-center text-center">
                  </div>
                </div>
              </div>
              <button
                    onClick={handleAddAttribute}
                    className="btn btn-base-100"
                  >
                    add another?
                  </button>
                  <div className="text-3x text-accent mt-3">{attributeErrorMessage}</div>
            </>
          )}
          {completedAttributes.length > 0 && (
            <>
              <div className="divider"></div>
              <div className="grid grid-cols-1 p-5 gap-5">
                {completedAttributes.map((curAttribute)  => {
                  return curAttribute;
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AttributePage);

import {
  ATTRIBUTE_TEXT,
  ATTRIBUTE_CATEGORY_TEXT,
  DEFINE_ATTRIBUTE_TEXT,
  ATTRIBUTE_FILE_TEXT,
  WHAT_ATTRIBUTE_TEXT,
} from "../../../common/constantsText";
import exampleImage from "../../../assets/NFT-example.png";
import "../Artist.css";
import { useState } from "react";
import { IAttribute, IFormData } from "../../../common/interfaces";
import CityAttribute from "../attributeSelectors/CityAttribute";
import EventDateAttribute from "../attributeSelectors/EventDateAttribute";
import OpenerAttribute from "../attributeSelectors/OpenerAttribute";
import StateAttribute from "../attributeSelectors/StateAttribute";
import VenueAttribute from "../attributeSelectors/VenueAttribute";
import { ATTRIBUTE_EXAMPLE_TEXT } from "../../../common/constantsText";
import BuyDateAttribute from "../attributeSelectors/BuyDateAttribute";
import { ATTRIBUTES, AttributesList } from "../../../common/constants";
import ImageUpload from "../../../components/ImageUpload";
import { connect } from "react-redux";
import AttributeSummary from "../summaryPage/AttributeSummary";
import { useAppDispatch } from "../../../app/hooks";
import { completeAttribute } from "../../../app/redux";
import React from "react";
import LotteryAttributeSummary from "../summaryPage/LotteryAttributeSummary";
import { REAL_WORLD_LINK_TEXT } from "../../../common/constantsText";
import ProgressBar from "../progressBar";
import RealWorldLink from "./RealWorldLink";

interface IAttributePageBaseProps {
  guide: boolean;
  guideHandler: (input: boolean) => void;
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
        !props.attributeList[currentAttribute].data)
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
        <ProgressBar stepNumber={3} />
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
              <div className="grid grid-cols-2 w-full p-5 gap-10 place-items-center flex flex-wrap mx-auto">
                <div className="card w-96 bg-base-100 shadow-xl mr-60 m-5">
                  <div className="card-body items-center text-center">
                    <div className="card-actions"></div>
                    {props.guide && (
                      <div>
                        <p className="artist-subheader">
                          What is an Attribute?
                        </p>
                        <p className="descriptionParagraph">{ATTRIBUTE_TEXT}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
                  <figure className="px-10 pt-10">
                    <img
                      src={exampleImage}
                      alt="Example"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title font-xl font-patrick">
                      Example Attribute
                    </h2>
                    <div className="card-actions"></div>
                    {props.guide && (
                      <div>
                        <p className="artist-subheader">
                          What makes a good solid Attribute file?
                        </p>
                        <p className="descriptionParagraph">
                          {ATTRIBUTE_EXAMPLE_TEXT}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl mr-60 m-5">
                  <figure className="px-10 pt-10">
                    <div className="form-control">
                      <div className="form-control w-full max-w-xs">
                        <span className="label-text font-patrick text-lg font-primary">
                          Attribute Category
                        </span>
                        <label className="label"></label>
                        <input
                          type="text"
                          placeholder="Ex. glasses, background"
                          className="input input-bordered input-warning w-full max-w-xs p-5"
                        />
                      </div>
                    </div>
                  </figure>
                  <div className="card-body items-center text-center">
                    {props.guide && (
                      <div>
                        <p className="artist-subheader">
                          How to decide categories?
                        </p>
                        <p className="descriptionParagraph">
                          {ATTRIBUTE_CATEGORY_TEXT}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <RealWorldLink
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
                        Attribute Category
                      </span>
                      <label className="label"></label>
                      <input
                        type="text"
                        placeholder="Ex. glasses, background"
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                      />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center"></div>
              </div>

              <RealWorldLink
                guide={props.guide}
                setCurrentAttribute={setCurrentAttribute}
                formData={props.formData}
                completedAttributes={grayedOutAttributes}
              />
            </div>
          )}
          {props.guide ? (
            <>
              <div className="card w-full bg-base-100 shadow-xl mr-60 m-5">
                <div className="card-body items-center text-center">
                  <div className="card-actions"></div>
                  {props.guide && (
                    <div>
                      <p className="artist-subheader">
                        Now to define the attributes in this category.
                      </p>
                      <p className="descriptionParagraph">
                        {DEFINE_ATTRIBUTE_TEXT}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
                <div className="card w-96 bg-base-100 shadow-xl mr-60 m-2">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title font-xl font-patrick">
                      Attribute File
                    </h2>
                    <div className="card-actions">
                      <ImageUpload attributeId={currentAttribute} />
                    </div>
                    {props.guide && (
                      <div>
                        <p className="artist-subheader">What is this? </p>
                        <p className="descriptionParagraph">
                          {ATTRIBUTE_FILE_TEXT}
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
                          Attribute
                        </span>
                      </label>
                      {attributeComponent()}
                    </div>
                  </figure>
                  <div className="card-body items-center text-center">
                    {props.guide && (
                      <div>
                        <p className="artist-subheader">What is this?</p>
                        <p className="descriptionParagraph">
                          {WHAT_ATTRIBUTE_TEXT}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button onClick={handleAddAttribute} className="btn btn-base-100">
                + add another?
              </button>
              <div className="flex w-screen items-center"></div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
                <div className="card w-96 bg-base-100 shadow-xl mr-60 m-2">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title font-xl font-patrick">
                      Attribute File
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
                          Attribute
                        </span>
                      </label>
                      {attributeComponent()}
                    </div>
                  </figure>
                  <div className="card-body items-center text-center">
                    {props.guide && (
                      <div>
                        <p className="artist-subheader">What is this?</p>
                        <p className="descriptionParagraph">
                          {WHAT_ATTRIBUTE_TEXT}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleAddAttribute}
                  className="btn btn-base-100"
                >
                  add another?
                </button>
              </div>
            </>
          )}
          {completedAttributes.length > 0 && (
            <>
              <div className="divider">Completed</div>
              <div className="grid grid-cols-1 p-5 gap-5">
                {completedAttributes.map((curAttribute) => {
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

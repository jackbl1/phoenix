import "../Artist.css";
import { useState } from "react";
import { IAttribute, IFormData } from "../../../common/interfaces";
import CityAttribute from "../attributeSelectors/CityAttribute";
import EventDateAttribute from "../attributeSelectors/EventDateAttribute";
import OpenerAttribute from "../attributeSelectors/OpenerAttribute";
import StateAttribute from "../attributeSelectors/StateAttribute";
import VenueAttribute from "../attributeSelectors/VenueAttribute";
import BuyDateAttribute from "../attributeSelectors/BuyDateAttribute";
import { AttributesList } from "../../../common/constants";
import ImageUpload from "../../../components/ImageUpload";
import { connect } from "react-redux";
import AttributeSummary from "../summaryPage/AttributeSummary";
import { useAppDispatch } from "../../../app/hooks";
import { completeAttribute } from "../../../app/redux";
import React from "react";
import LotteryAttributeSummary from "../summaryPage/LotteryAttributeSummary";
import { REAL_WORLD_LINK_TEXT } from "../../../common/constantsText";
import ProgressBar from "../progressBar";

interface IV1PageBaseProps {
  guide: boolean;
  guideHandler: (input: boolean) => void;
  formData: IFormData;
}

interface IV1PageReduxProps {
  attributeList: { [key: string]: IAttribute };
}

interface IV1PageProps extends IV1PageBaseProps, Partial<IV1PageReduxProps> {}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  toggleTodo: () => dispatch(),
});

const mapStateToProps = (state: any) => {
  return {
    attributeList: state.createFlow.attributes,
  };
};

function V1Page(props: IV1PageProps) {
  const [currentAttribute, setCurrentAttribute] = useState("");
  const [attributeErrorMessage, setAttributeErrorMessage] = useState("");
  const [grayedOutAttributes, setGrayedOutAttributes] = useState([""]);
  const [completedAttributes, setCompletedAttributes] = useState([<></>]);
  const dispatch = useAppDispatch();
  const attributesComponent = () => {
    return (
      <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
        <figure className="px-10 pt-10">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-patrick text-lg font-primary">
                NFT Grouping
              </span>
            </label>
            <CityAttribute city={props.formData.city} />
            <EventDateAttribute
              eventDate={props.formData.date.toDateString()}
            />
            <OpenerAttribute opener={props.formData.opener} />
            <BuyDateAttribute buyDate={props.formData.buyDate} />
            <StateAttribute state={props.formData.state} />
            <VenueAttribute venue={props.formData.venue} />{" "}
          </div>
        </figure>
        <div className="card-body items-center text-center">
          {props.guide && (
            <div className="">
              <p className="artist-subheader">What is this?</p>
              <p className="descriptionParagraph">{REAL_WORLD_LINK_TEXT}</p>
            </div>
          )}
        </div>
      </div>
    );
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
            <>guide stuff</>
          ) : (
            <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
              <div className="card w-96 bg-base-100 shadow-xl mr-60 m-5">
                <figure className="px-10 pt-10">
                  <div className="form-control">
                    <div className="form-control w-full max-w-xs">
                      <span className="label-text font-patrick text-lg font-primary">
                        NFT Title
                      </span>
                      <label className="label"></label>
                      <input
                        type="text"
                        placeholder="Be creative!"
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                      />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center"></div>
              </div>

              {attributesComponent()}
            </div>
          )}
          {props.guide ? (
            <>guide stuff</>
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
              <div className="divider"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(V1Page);

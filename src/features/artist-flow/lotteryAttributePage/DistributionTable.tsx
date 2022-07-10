import { useAppDispatch } from "../../../app/hooks";
import { setAttributeData } from "../../../app/redux";
import { ATTRIBUTES } from "../../../common/constants";
import { IFormData } from "../../../common/interfaces";
import { AttributesList } from "../../../common/constants";
import { DISTRIBUTION_PER_TEXT } from "../../../common/constantsText";
import { DatePicker } from "@fluentui/react";
import { useState } from "react";

interface IBuyDateAttributeProps {
  buyDate: string;
}

interface IDistributionTableProps {
  guide: boolean;
  formData: IFormData;
  currentAttribute: string;
}


function DistributionTable(props: IDistributionTableProps) {
  const dispatch = useAppDispatch();
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  
  const attributeLabelComponent = () => {
    if (props.currentAttribute === ATTRIBUTES.CITY) {
      return (
        <>
          <div className="p-2">
            <p>For</p>
            <input
              className="input input-bordered input-primary w-full max-w-xs p-5"
              value={props.formData.city}
              onClick={(e) => {
                dispatch(
                  setAttributeData({
                    attributeId: ATTRIBUTES.CITY,
                    data: props.formData.city,
                  })
                );
              }}
              disabled
            />
          </div>
          <div className="p-2">
            <p>% receiving</p>
            <input
              className="input input-bordered input-warning w-full max-w-xs p-5"
              type="number"
              min="0"
              max="100"
              placeholder="Ex. 10 (%)"
            />
          </div>
        </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.EVENT_DATE) {
      return (
        <>
        <div className="p-2">
          <p>For</p>
          <input
            className="input input-bordered input-primary w-full max-w-xs p-5"
            value={props.formData.date.toDateString()}
            onClick={(e) => {
              dispatch(
                setAttributeData({
                  attributeId: ATTRIBUTES.EVENT_DATE,
                  data: props.formData.date.toDateString(),
                })
              );
            }}
            disabled
          />
        </div>
        <div className="p-2">
          <p>% receiving</p>
          <input
            className="input input-bordered input-warning w-full max-w-xs p-5"
            type="number"
            min="0"
            max="100"
            placeholder="Ex. 10 (%)"
          />
        </div>
      </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.BUY_DATE) {
      return (
        <>
        <div>
            <input type="radio" name="buyDateAttribute" value="one" id="one" />
            <label className="" htmlFor="one">
              <p>From</p>
              <DatePicker
                value={fromDate}
                className=""
                onSelectDate={(input: any) => {
                  setFromDate(input);
                  dispatch(
                    setAttributeData({
                      attributeId: ATTRIBUTES.BUY_DATE,
                      data:
                        fromDate.toDateString() + " to " + toDate.toDateString(),
                    })
                  );
                }}
                isRequired
              />
              <p>To</p>
              <DatePicker
                value={toDate}
                onSelectDate={(input: any) => {
                  setToDate(input);
                  dispatch(
                    setAttributeData({
                      attributeId: ATTRIBUTES.BUY_DATE,
                      data:
                        fromDate.toDateString() + " to " + toDate.toDateString(),
                    })
                  );
                }}
                isRequired
              />
            </label>
        </div>


        <div className="p-2">
          <p>% receiving</p>
          <input
            className="input input-bordered input-warning w-full max-w-xs p-5"
            type="number"
            min="0"
            max="100"
            placeholder="Ex. 10 (%)"
          />
        </div>
      </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.OPENER) {
      return (
        <>
        <div className="p-2">
          <p>For</p>
          <input
            className="input input-bordered input-primary w-full max-w-xs p-5"
            value={props.formData.opener}
            onClick={(e) => {
              dispatch(
                setAttributeData({
                  attributeId: ATTRIBUTES.OPENER,
                  data: props.formData.opener,
                })
              );
            }}
            disabled
          />
        </div>
        <div className="p-2">
          <p>% receiving</p>
          <input
            className="input input-bordered input-warning w-full max-w-xs p-5"
            type="number"
            min="0"
            max="100"
            placeholder="Ex. 10 (%)"
          />
        </div>
      </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.STATE) {
      return (
        <>
        <div className="p-2">
          <p>For</p>
          <input
            className="input input-bordered input-primary w-full max-w-xs p-5"
            value={props.formData.state}
            onClick={(e) => {
              dispatch(
                setAttributeData({
                  attributeId: ATTRIBUTES.STATE,
                  data: props.formData.state,
                })
              );
            }}
            disabled
          />
        </div>
        <div className="p-2">
          <p>% receiving</p>
          <input
            className="input input-bordered input-warning w-full max-w-xs p-5"
            type="number"
            min="0"
            max="100"
            placeholder="Ex. 10 (%)"
          />
        </div>
      </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.VENUE) {
      return (
        <>
        <div className="p-2">
          <p>For</p>
          <input
            className="input input-bordered input-primary w-full max-w-xs p-5"
            value={props.formData.venue}
            onClick={(e) => {
              dispatch(
                setAttributeData({
                  attributeId: ATTRIBUTES.VENUE,
                  data: props.formData.venue,
                })
              );
            }}
            disabled
          />
        </div>
        <div className="p-2">
          <p>% receiving</p>
          <input
            className="input input-bordered input-warning w-full max-w-xs p-5"
            type="number"
            min="0"
            max="100"
            placeholder="Ex. 10 (%)"
          />
        </div>
      </>
      );
    } else {
      return <p>Please select an attribute to define</p>;
    }
  };
  return (



    <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5 p-5">
      <p className="card-title font-xl font-patrick">Distribution</p>
      <div className="">{attributeLabelComponent()}</div>
      <div className="card-body items-center text-center">
      {props.guide && (
            <div className="">
              <p className="artist-subheader">What is the 'Distribution'?</p>
              <p className="descriptionParagraph">{DISTRIBUTION_PER_TEXT}</p>
            </div>
          )}
    </div>
    </div>
  );
}

export default DistributionTable;

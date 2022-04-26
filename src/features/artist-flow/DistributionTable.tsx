import { ATTRIBUTES, IFormData } from "../../common/interfaces";
import BuyDateAttribute from "./attributeSelectors/BuyDateAttribute";
import CityAttribute from "./attributeSelectors/CityAttribute";
import EventDateAttribute from "./attributeSelectors/EventDateAttribute";
import OpenerAttribute from "./attributeSelectors/OpenerAttribute";
import SeatingLevelAttribute from "./attributeSelectors/SeatingLevelAttribute";
import StateAttribute from "./attributeSelectors/StateAttribute";
import VenueAttribute from "./attributeSelectors/VenueAttribute";

interface IDistributionTableProps {
  formData: IFormData;
  currentAttribute: string;
}

function DistributionTable(props: IDistributionTableProps) {
  const attributeLabelComponent = () => {
    if (props.currentAttribute === ATTRIBUTES.BUY_DATE) {
      return (
        <>
          <div className="col">
            <p>For</p>
            <input
              className="input-style-short-disabled"
              value="placeholder"
              disabled
            />
          </div>
          <div className="col">
            <p>% receiving</p>
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
          </div>
        </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.CITY) {
      return (
        <>
          <div className="col">
            <p>For</p>
            <input
              className="input-style-short-disabled"
              value={props.formData.city}
              disabled
            />
          </div>
          <div className="col">
            <p>% receiving</p>
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
          </div>
        </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.EVENT_DATE) {
      return (
        <>
          <div className="col">
            <p>For</p>
            <input
              className="input-style-short-disabled"
              value={props.formData.date.toDateString()}
              disabled
            />
          </div>
          <div className="col">
            <p>% receiving</p>
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
          </div>
        </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.OPENER) {
      return (
        <>
          <div className="col">
            <p>For</p>
            <input
              className="input-style-short-disabled"
              value={props.formData.opener}
              disabled
            />
          </div>
          <div className="col">
            <p>% receiving</p>
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
          </div>
        </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.SEATING_LEVEL) {
      return (
        <>
          <div className="col">
            <p>For</p>
            <input
              className="input-style-short-disabled"
              value="VIP"
              disabled
            />
            <input className="input-style-short-disabled" value="GA" disabled />
            <input
              className="input-style-short-disabled"
              value="Deluxe"
              disabled
            />
            <input
              className="input-style-short-disabled"
              value="Lawn"
              disabled
            />
          </div>
          <div className="col">
            <p>% receiving</p>
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
          </div>
        </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.STATE) {
      return (
        <>
          <div className="col">
            <p>For</p>
            <input
              className="input-style-short-disabled"
              value={props.formData.state}
              disabled
            />
          </div>
          <div className="col">
            <p>% receiving</p>
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
          </div>
        </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.VENUE) {
      return (
        <>
          <div className="col">
            <p>For</p>
            <input
              className="input-style-short-disabled"
              value={props.formData.venue}
              disabled
            />
          </div>
          <div className="col">
            <p>% receiving</p>
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };
  const percentReceiving = <></>;
  const thirdCol = <></>;
  return (
    <div className="dark-container-wide">
      <div className="row">
        {attributeLabelComponent()}
        {/* <div className="col">
          <p>For</p>
          {attributeLabelComponent()}
        </div>
        <div className="col">
          <p>% receiving</p>
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 10%"
          />
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 10%"
          />
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 10%"
          />
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 10%"
          />
        </div> */}
        {/* <div className="col">
          <p># of tickets</p>
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 100"
          />
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 10"
          />
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 1"
          />
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 0"
          />
        </div> */}
      </div>
    </div>
  );
}

export default DistributionTable;

import { REAL_WORLD_LINK_TEXT } from "../../common/constants";

interface IRealWorldLinkProps {
  guide: boolean;
}

function RealWorldLink(props: IRealWorldLinkProps) {
  return (
    <div className="row">
      <div className="dark-container">
        Real World Link
        <div className="col">
          <input
            type="radio"
            name="buttonGroup"
            value="buy-date"
            id="buy-date"
          />
          <label className="radio-label" htmlFor="buy-date">
            Buy date
          </label>
          <input type="radio" name="buttonGroup" value="city" id="city" />
          <label className="radio-label" htmlFor="city">
            City
          </label>
          <input
            type="radio"
            name="buttonGroup"
            value="seating-level"
            id="seating-level"
          />
          <label className="radio-label" htmlFor="seating-level">
            Seating Level
          </label>
          <input type="radio" name="buttonGroup" value="state" id="state" />
          <label className="radio-label" htmlFor="state">
            State
          </label>
          <input type="radio" name="buttonGroup" value="venue" id="venue" />
          <label className="radio-label" htmlFor="venue">
            Venue
          </label>
          <input type="radio" name="buttonGroup" value="opener" id="opener" />
          <label className="radio-label" htmlFor="opener">
            Opener
          </label>
          <input
            type="radio"
            name="buttonGroup"
            value="event-date"
            id="event-date"
          />
          <label className="radio-label" htmlFor="event-date">
            Event Date
          </label>
        </div>
      </div>
      {props.guide && (
        <div>
          <p className="Home-title-container">What is the real world link?</p>
          {REAL_WORLD_LINK_TEXT}
        </div>
      )}
    </div>
  );
}

export default RealWorldLink;
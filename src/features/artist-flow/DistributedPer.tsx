import { DISTRIBUTION_PER_TEXT } from "../../common/constants";

interface IDistributedPerProps {
  guide: boolean;
}

function DistributedPer(props: IDistributedPerProps) {
  return (
    <div className="row">
      <div className="dark-container">
        Distributed Per...
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
          <p className="artist-subheader">
            What is the 'Distribution Per'?
          </p>
          <p className="descriptionParagraph">{DISTRIBUTION_PER_TEXT}</p>
        </div>
      )}
    </div>
  );
}

export default DistributedPer;

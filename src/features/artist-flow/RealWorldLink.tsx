import { useState } from "react";
import { REAL_WORLD_LINK_TEXT } from "../../common/constants";
import { ATTRIBUTES, AttributesList } from "../../common/interfaces";

interface IRealWorldLinkProps {
  guide: boolean;
}

function RealWorldLink(props: IRealWorldLinkProps) {
  const [page, setPage] = useState(0);
  const attributesButtons = AttributesList.map(function (attribute) {
    return (
      <>
        <input
          type="radio"
          name="buttonGroup"
          value={attribute}
          id={attribute}
        />
        <label className="radio-label" htmlFor={attribute}>
          {attribute}
        </label>
      </>
    );
  });
  return (
    <div className="row">
      <div className="dark-container">
        Real World Link
        {attributesButtons}
        {/* <input type="radio" name="buttonGroup" value="buy-date" id="buy-date" />
        <label className="radio-label" htmlFor="buy-date">
          Buy date
        </label>
        <input
          type="radio"
          name="buttonGroup"
          value={ATTRIBUTES.CITY}
          id={ATTRIBUTES.CITY}
        />
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
        </label> */}
      </div>
      {props.guide && (
        <div className="">
          <p className="artist-subheader">What is the real world link?</p>
          <p className="descriptionParagraph">{REAL_WORLD_LINK_TEXT}</p>
        </div>
      )}
    </div>
  );
}

export default RealWorldLink;

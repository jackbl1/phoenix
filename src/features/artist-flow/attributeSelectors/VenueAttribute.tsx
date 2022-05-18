import { useAppDispatch } from "../../../app/hooks";
import { setAttributeData } from "../../../app/redux";
import { ATTRIBUTES } from "../../../common/constants";

interface IVenueAttributeProps {
  venue: string;
}

function VenueAttribute(props: IVenueAttributeProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      setAttributeData({ attributeId: ATTRIBUTES.VENUE, data: props.venue })
    );
  };
  return (
    <div className="dark-container">
      <p className="container-title">Attribute</p>
      <br />
      <div className="col">
        <input
          type="radio"
          name="venueAttribute"
          value="one"
          id="one"
          onClick={handleClick}
        />
        <label className="radio-label" htmlFor="one">
          {props.venue}
        </label>
      </div>
    </div>
  );
}

export default VenueAttribute;

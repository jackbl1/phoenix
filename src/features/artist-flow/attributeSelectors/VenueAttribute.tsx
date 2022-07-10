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
    <div>
      <input
        type="radio"
        name="venueAttribute"
        value="one"
        id="one"
        onClick={handleClick}
      />
      <label className="btn btn-outline btn-warning m-2" htmlFor="one">
      {props.venue}
            </label>
    </div>
  );
}

export default VenueAttribute;

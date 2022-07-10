import { useAppDispatch } from "../../../app/hooks";
import { setAttributeData } from "../../../app/redux";
import { ATTRIBUTES } from "../../../common/constants";

interface IEventDateAttributeProps {
  eventDate: string;
}

function EventDateAttribute(props: IEventDateAttributeProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      setAttributeData({ attributeId: ATTRIBUTES.EVENT_DATE, data: props.eventDate })
    );
  };

  return (
    <div>
      <input
        type="radio"
        name="eventDateAttribute"
        value="one"
        id="one"
        onClick={handleClick}
      />
      <label className="btn btn-outline btn-warning m-2" htmlFor="one">
      {props.eventDate}
      </label>
    </div>
  );
}

export default EventDateAttribute;

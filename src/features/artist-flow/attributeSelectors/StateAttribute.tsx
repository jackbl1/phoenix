import { useAppDispatch } from "../../../app/hooks";
import { setAttributeData } from "../../../app/redux";
import { ATTRIBUTES } from "../../../common/constants";

interface IStateAttributeProps {
  state: string;
}

function StateAttribute(props: IStateAttributeProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      setAttributeData({ attributeId: ATTRIBUTES.STATE, data: props.state })
    );
  };
  return (
    <div>
      <input
        type="radio"
        name="stateAttribute"
        value="one"
        id="one"
        onClick={handleClick}
      />
      <label className="btn btn-outline btn-warning m-2" htmlFor="one">
      {props.state}
            </label>
    </div>
  );
}

export default StateAttribute;

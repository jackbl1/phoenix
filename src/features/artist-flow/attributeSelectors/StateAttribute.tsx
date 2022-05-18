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
    <div className="dark-container">
      <p className="container-title">Attribute</p>
      <br />
      <div className="col">
        <input
          type="radio"
          name="stateAttribute"
          value="one"
          id="one"
          onClick={handleClick}
        />
        <label className="radio-label" htmlFor="one">
          {props.state}
        </label>
      </div>
    </div>
  );
}

export default StateAttribute;

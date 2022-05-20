import { useAppDispatch } from "../../../app/hooks";
import { setAttributeData } from "../../../app/redux";

interface IAttributeProps {
  currentAttribute: string;
  attributeLabel: string;
}

function Attribute(props: IAttributeProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="dark-container">
      <p className="container-title">Attribute</p>
      <br />
      <div className="col">
        <input
          type="radio"
          name="attribute"
          value="one"
          id="one"
          onChange={() => {
            dispatch(
              setAttributeData({
                attributeId: props.currentAttribute,
                data: props.attributeLabel,
              })
            );
          }}
        />
        <label className="radio-label" htmlFor="one">
          {props.attributeLabel}
        </label>
      </div>
    </div>
  );
}

export default Attribute;

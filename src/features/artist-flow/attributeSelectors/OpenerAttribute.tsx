import { useAppDispatch } from "../../../app/hooks";
import { setAttributeData } from "../../../app/redux";
import { ATTRIBUTES } from "../../../common/constants";

interface IOpenerAttributeProps {
  opener: string;
}

function OpenerAttribute(props: IOpenerAttributeProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      setAttributeData({ attributeId: ATTRIBUTES.OPENER, data: props.opener })
    );
  };
  return (
    <div className="dark-container">
      <p className="container-title">Attribute</p>
      <br />
      <div className="col">
        {props.opener.length > 0 ? (
          <>
            <input
              type="radio"
              name="openerAttribute"
              value="one"
              id="one"
              onClick={handleClick}
            />
            <label className="radio-label" htmlFor="one"></label>
          </>
        ) : (
          "No opener was entered"
        )}
      </div>
    </div>
  );
}

export default OpenerAttribute;

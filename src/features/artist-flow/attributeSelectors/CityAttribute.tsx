import { useAppDispatch } from "../../../app/hooks";
import { setAttributeData } from "../../../app/redux";
import { ATTRIBUTES } from "../../../common/constants";

interface ICityAttributeProps {
  city: string;
}

function CityAttribute(props: ICityAttributeProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      setAttributeData({ attributeId: ATTRIBUTES.CITY, data: props.city })
    );
  };

  return (
    <div className="dark-container">
      <p className="container-title">Attribute</p>
      <br />
      <div className="col">
        <input
          type="radio"
          name="cityAttribute"
          value="one"
          id="one"
          onClick={handleClick}
        />
        <label className="radio-label" htmlFor="one">
          {props.city}
        </label>
      </div>
    </div>
  );
}

export default CityAttribute;

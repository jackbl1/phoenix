interface ICityAttributeProps {
  city: string;
}

function CityAttribute(props: ICityAttributeProps) {
  return (
    <div className="dark-container">
      Attribute <br />
      <div className="col">
        <input type="radio" name="cityAttribute" value="one" id="one" />
        <label className="radio-label" htmlFor="one">
          {props.city}
        </label>
      </div>
    </div>
  );
}

export default CityAttribute;

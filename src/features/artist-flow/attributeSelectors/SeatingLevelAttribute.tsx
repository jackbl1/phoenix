interface ISeatingLevelAttributeProps {}

function SeatingLevelAttribute(props: ISeatingLevelAttributeProps) {
  return (
    <div className="dark-container">
      Attribute <br />
      <div className="col">
        <input type="radio" name="buttonGroup" value="one" id="one" />
        <label className="radio-label" htmlFor="one">
          VIP
        </label>
        <input type="radio" name="buttonGroup" value="two" id="two" />
        <label className="radio-label" htmlFor="two">
          Deluxe
        </label>
        <input type="radio" name="buttonGroup" value="three" id="three" />
        <label className="radio-label" htmlFor="three">
          GA
        </label>
        <input type="radio" name="buttonGroup" value="four" id="four" />
        <label className="radio-label" htmlFor="four">
          Lawn
        </label>
      </div>
    </div>
  );
}

export default SeatingLevelAttribute;

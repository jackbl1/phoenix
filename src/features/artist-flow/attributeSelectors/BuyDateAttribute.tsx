interface IBuyDateAttributeProps {
  buyDate: string;
}

function BuyDateAttribute(props: IBuyDateAttributeProps) {
  return (
    <div className="dark-container">
      Attribute <br />
      <div className="col">
        <input type="radio" name="buttonGroup" value="one" id="one" />
        <label className="radio-label" htmlFor="one">
          {props.buyDate}
        </label>
      </div>
    </div>
  );
}

export default BuyDateAttribute;

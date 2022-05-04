interface IBuyDateAttributeProps {
  buyDate: string;
}

function BuyDateAttribute(props: IBuyDateAttributeProps) {
  return (
    <div className="dark-container">
      <p className="container-title">Attribute</p>
      <br />
      <div className="col">
        <input type="radio" name="buyDateAttribute" value="one" id="one" />
        <label className="radio-label" htmlFor="one">
          {props.buyDate}
        </label>
      </div>
    </div>
  );
}

export default BuyDateAttribute;

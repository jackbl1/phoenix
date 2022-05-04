interface IStateAttributeProps {
  state: string;
}

function StateAttribute(props: IStateAttributeProps) {
  return (
    <div className="dark-container">
      <p className="container-title">Attribute</p>
      <br />
      <div className="col">
        <input type="radio" name="stateAttribute" value="one" id="one" />
        <label className="radio-label" htmlFor="one">
          {props.state}
        </label>
      </div>
    </div>
  );
}

export default StateAttribute;

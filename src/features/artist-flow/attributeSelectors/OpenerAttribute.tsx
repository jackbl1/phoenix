interface IOpenerAttributeProps {
  opener: string;
}

function OpenerAttribute(props: IOpenerAttributeProps) {
  return (
    <div className="dark-container">
      <p className="container-title">Attribute</p>
      <br />
      <div className="col">
        {props.opener.length > 0 ? (
          <>
            <input type="radio" name="openerAttribute" value="one" id="one" />
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

interface IVenueAttributeProps {
  venue: string;
}

function VenueAttribute(props: IVenueAttributeProps) {
  return (
    <div className="dark-container">
      Attribute <br />
      <div className="col">
        <input type="radio" name="buttonGroup" value="one" id="one" />
        <label className="radio-label" htmlFor="one">
          {props.venue}
        </label>
      </div>
    </div>
  );
}

export default VenueAttribute;

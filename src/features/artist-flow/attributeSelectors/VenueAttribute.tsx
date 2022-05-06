interface IVenueAttributeProps {
  venue: string;
}

function VenueAttribute(props: IVenueAttributeProps) {
  return (
    <div className="dark-container">
      <p className="container-title">Attribute</p>
      <br />
      <div className="col">
        <input type="radio" name="venueAttribute" value="one" id="one" />
        <label className="radio-label" htmlFor="one">
          {props.venue}
        </label>
      </div>
    </div>
  );
}

export default VenueAttribute;

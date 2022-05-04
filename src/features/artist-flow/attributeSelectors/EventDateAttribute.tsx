interface IEventDateAttributeProps {
  eventDate: string;
}

function EventDateAttribute(props: IEventDateAttributeProps) {
  return (
    <div className="dark-container">
      <p className="container-title">Attribute</p>
      <br />
      <div className="col">
        <input type="radio" name="eventDateAttribute" value="one" id="one" />
        <label className="radio-label" htmlFor="one">
          {props.eventDate}
        </label>
      </div>
    </div>
  );
}

export default EventDateAttribute;

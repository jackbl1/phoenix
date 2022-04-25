interface IEventDateAttributeProps {
  eventDate: string;
}

function EventDateAttribute(props: IEventDateAttributeProps) {
  return (
    <div className="dark-container">
      Attribute <br />
      <div className="col">
        <input type="radio" name="buttonGroup" value="one" id="one" />
        <label className="radio-label" htmlFor="one">
          {props.eventDate}
        </label>
      </div>
    </div>
  );
}

export default EventDateAttribute;

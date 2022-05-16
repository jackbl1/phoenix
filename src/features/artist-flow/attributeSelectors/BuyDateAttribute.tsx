import { DatePicker } from "@fluentui/react";
import { useState } from "react";

interface IBuyDateAttributeProps {
  buyDate: string;
}

function BuyDateAttribute(props: IBuyDateAttributeProps) {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [dateSpans, setDateSpans] = useState([<></>]);
  return (
    <div className="dark-container">
      <p className="container-title">Attribute</p>
      <br />
      <div className="col">
        <input type="radio" name="buyDateAttribute" value="one" id="one" />
        <label className="radio-label" htmlFor="one">
          <p>From</p>
          <DatePicker
            value={fromDate}
            onSelectDate={(input: any) => {
              setFromDate(input);
            }}
            isRequired
          />
          <p>To</p>
          <DatePicker
            value={toDate}
            onSelectDate={(input: any) => {
              setToDate(input);
            }}
            isRequired
          />
        </label>
      </div>
    </div>
  );
}

export default BuyDateAttribute;

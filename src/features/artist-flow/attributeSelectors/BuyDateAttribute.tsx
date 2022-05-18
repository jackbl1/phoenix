import { DatePicker } from "@fluentui/react";
import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { setAttributeData } from "../../../app/redux";
import { ATTRIBUTES } from "../../../common/constants";

interface IBuyDateAttributeProps {
  buyDate: string;
}

function BuyDateAttribute(props: IBuyDateAttributeProps) {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [dateSpans, setDateSpans] = useState([<></>]);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      setAttributeData({
        attributeId: ATTRIBUTES.BUY_DATE,
        data: props.buyDate,
      })
    );
  };

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
        <button onClick={handleClick} className="addAnotherButton">
          add date range
        </button>
      </div>
    </div>
  );
}

export default BuyDateAttribute;

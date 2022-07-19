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

  const dispatch = useAppDispatch();
  dispatch(
    setAttributeData({
      attributeId: ATTRIBUTES.BUY_DATE,
      data: fromDate.toDateString() + " to " + toDate.toDateString(),
    })
  );

  return (

    <div>
        <input type="radio" name="buyDateAttribute" value="one" id="one" />
        <label className="" htmlFor="one">
          <p>From</p>
          <DatePicker
            value={fromDate}
            className=""
            onSelectDate={(input: any) => {
              setFromDate(input);
              dispatch(
                setAttributeData({
                  attributeId: ATTRIBUTES.BUY_DATE,
                  data:
                    fromDate.toDateString() + " to " + toDate.toDateString(),
                })
              );
            }}
            isRequired
          />
          <p>To</p>
          <DatePicker
            value={toDate}
            onSelectDate={(input: any) => {
              setToDate(input);
              dispatch(
                setAttributeData({
                  attributeId: ATTRIBUTES.BUY_DATE,
                  data:
                    fromDate.toDateString() + " to " + toDate.toDateString(),
                })
              );
            }}
            isRequired
          />
        </label>
    </div>
  );
}

export default BuyDateAttribute;

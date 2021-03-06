import { DatePicker } from "@fluentui/react";
import { IFormData } from "../common/interfaces";

interface IDatePickerProps {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
}

function CustomDatePicker(props: IDatePickerProps) {
  const style: any = {
    height: "60px",
    width: "300px",
    float: "center",
    "box-shadow": "7px 6px 28px 3px rgba(0, 0, 0, 0.24)",
    "padding-left": "40px",
    "padding-right": "40px",
    margin: "2%",
    display: "inline-flex",
    "font-size": "20px",
    color: "black",
    "background-color": "white",
  };

  return (
    <DatePicker
      //className="input-style"
      styles={{ readOnlyTextField: style }}
      value={props.formData.date}
      onSelectDate={(input: any) => {
        props.setFormData({ ...props.formData, date: input });
      }}
      isRequired
    />
  );
}

export default CustomDatePicker;

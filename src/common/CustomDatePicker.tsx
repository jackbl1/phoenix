import { DatePicker } from "@fluentui/react";
import { IErrorData, IFormData } from "./interfaces";

interface IDatePickerProps {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
  errorData: IErrorData;
}

function CustomDatePicker(props: IDatePickerProps) {
  return (
    <DatePicker
      className="input-style"
      value={props.formData.date}
      onSelectDate={(input: any) => {
        props.setFormData({ ...props.formData, date: input });
      }}
      isRequired
    />
  );
}

export default CustomDatePicker;

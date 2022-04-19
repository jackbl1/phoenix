import { DatePicker } from "@fluentui/react";
import { IErrorData, IFormData } from "../../common/interfaces";

interface IPage2Props {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
  errorData: IErrorData;
}

function Page2(props: IPage2Props) {
  return (
    <div className="artist-flow-body">
      <div className="artist-row">
        <a className="questionPrompt">What is the name of the venue?</a>
        <div className="col">
          <input
            className="input-style"
            type="text"
            placeholder="Ex. The Filmore, John's Garage, etc."
            value={props.formData.venue}
            onChange={(e) => {
              props.setFormData({ ...props.formData, venue: e.target.value });
            }}
            required
          />
          <p className="error">{props.errorData.venueError}</p>
        </div>
        <a className="questionPrompt">City?</a>
        <div className="col">
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. San Francisco "
            value={props.formData.city}
            onChange={(e) => {
              props.setFormData({ ...props.formData, city: e.target.value });
            }}
            required
          />
          <p className="error">{props.errorData.cityError}</p>
        </div>
        <a className="questionPrompt">State?</a>
        <div className="col">
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. California"
            value={props.formData.state}
            onChange={(e) => {
              props.setFormData({ ...props.formData, state: e.target.value });
            }}
            required
          />
          <p className="error">{props.errorData.stateError}</p>
        </div>
      </div>
      <div className="artist-row">
        <a className="questionPrompt">When is it?</a>
        {/* <input
          className="input-style"
          type="text"
          placeholder="Month, day, year"
          value={props.formData.date}
          onChange={(e) => {
            props.setFormData({ ...props.formData, date: e.target.value });
          }}
          required
        /> */}
        <DatePicker
          className="input-style"
          value={props.formData.date}
          onSelectDate={(input: any) => {
            props.setFormData({ ...props.formData, date: input });
          }}
          isRequired
        />
        <a className="questionPrompt">How many tickets are being sold?</a>
        <input
          className="input-style-short"
          type="number"
          placeholder="Ex. 1000"
          value={props.formData.ticketNum}
          onChange={(e) => {
            props.setFormData({
              ...props.formData,
              ticketNum: e.target.value as unknown as number,
            });
          }}
          required
        />
        <input
          className="input-style-short"
          type="text"
          placeholder="Level? (Ex. GA, VIP)"
          value={props.formData.level}
          onChange={(e) => {
            props.setFormData({ ...props.formData, level: e.target.value });
          }}
        />
      </div>
      <div className="artist-row">
        <a className="questionPrompt">Opening act or experience</a>
        <input
          className="input-style"
          type="text"
          placeholder="Optional!"
          value={props.formData.opener}
          onChange={(e) => {
            props.setFormData({ ...props.formData, opener: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default Page2;

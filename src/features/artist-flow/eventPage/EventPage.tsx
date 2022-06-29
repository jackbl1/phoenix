import CustomDatePicker from "../../../components/CustomDatePicker";
import { IErrorData, IFormData } from "../../../common/interfaces";
import { locationStateCity } from "../../../common/CityState";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "../../../../node_modules/react-datepicker/dist/react-datepicker.css";


interface IEventPageProps {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
  errorData: IErrorData;
}

function EventPage(props: IEventPageProps) {
  const [currentState, setCurrentState] = useState("");

  const statesDropdown = [<></>];
  Object.keys(locationStateCity[0]).forEach((state) => {
    statesDropdown.push(<option>{state}</option>);
  });

  let citiesDropdown = [<></>];

  Object.keys(locationStateCity[0]["New York"]).forEach((city) => {
    citiesDropdown.push(<option>{city}</option>);

    const Example = () => {
      const [startDate, setStartDate] = useState(new Date());
      return (
        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
      );
    };
  });

  return (
    <div className="column-3 w-full p-5 gap-10 place-items-center flex flex-wrap">
      <ul className="steps steps-vertical m-5">
        <li className="step step-warning">Event Information</li>
        <li className="step">Base Image</li>
        <li className="step">Solid Attributes</li>
        <li className="step">Lottery Attributes</li>
        <li className="step">Confirm and Finish</li>
      </ul>

      <div className="rows-span-2">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg">
              What are people coming to see?
            </span>
          </label>
          <input
            type="text"
            placeholder="ex. concery, commedy show, etc."
            className="input input-bordered input-warning w-full max-w-xs p-5"
            value={props.formData.event}
            onChange={(e) => {
              props.setFormData({ ...props.formData, event: e.target.value });
            }}
            required
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg font-primary">
              Who are people coming to see?
            </span>
          </label>
          <input
            type="text"
            placeholder="Ex. The Beatles, The Los Angeles Rams, Dave Chapelle, etc."
            className="input input-bordered input-warning w-full max-w-xs p-5"
            value={props.formData.artist}
            onChange={(e) => {
              props.setFormData({ ...props.formData, artist: e.target.value });
            }}
            required
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg ">
              What is the name of the venue?
            </span>
          </label>
          <input
            type="text"
            placeholder="Ex. The Filmore, John's Garage, etc."
            className="input input-bordered input-warning w-full max-w-xs p-5"
            value={props.formData.venue}
            onChange={(e) => {
              props.setFormData({ ...props.formData, venue: e.target.value });
            }}
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <div
            className="datepicker relative form-floating mb-3 xl:w-96"
            data-mdb-toggle-button="false"
          >
            <label className="label">
              <span className="label-text font-patrick text-lg ">
                When is it?
              </span>
            </label>
              <DatePicker
                className="input input-bordered input-warning w-full max-w-xs p-5"
                selected={props.formData.date}
                onSelect={(input: any) => {
                  props.setFormData({ ...props.formData, date: input })}} //when day is clicked
                onChange={(input: any) => {
                  props.setFormData({ ...props.formData, date: input })}}
              />
          </div>
        </div>
      </div>
      <div className="rows-span-2">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg">State?</span>
          </label>
          <select
            className="select select-bordered select-warning"
            value={props.formData.state}
            onChange={(e) => {
              props.setFormData({ ...props.formData, state: e.target.value });
              setCurrentState(e.target.value);
              citiesDropdown = [];
              Object.keys(locationStateCity[0]["Alabama"]).forEach((city) => {
                citiesDropdown.push(<option>{city}</option>);
              });
            }}
            required
          >
            <option disabled selected>
              Pick one
            </option>
            {statesDropdown.map((stateOption) => {
              return stateOption;
            })}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg">City?</span>
          </label>
          <select
            className="select select-bordered select-warning"
            value={props.formData.city}
            onChange={(e) => {
              props.setFormData({ ...props.formData, city: e.target.value });
            }}
            required
          >
            <option disabled selected>
              Pick one
            </option>
            {citiesDropdown}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg ">
              How many tickets?
            </span>
          </label>
          <input
            type="text"
            placeholder="Ex. 1000"
            className="input input-bordered input-warning w-full max-w-xs p-5"
            value={props.formData.ticketNum}
            onChange={(e) => {
              props.setFormData({
                ...props.formData,
                ticketNum: e.target.value as unknown as number,
              });
            }}
            required
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg ">
              Opening act or Experience?
            </span>
          </label>
          <input
            type="text"
            placeholder="Optional!"
            className="input input-bordered input-warning w-full max-w-xs p-5"
            value={props.formData.opener}
            onChange={(e) => {
              props.setFormData({ ...props.formData, opener: e.target.value });
            }}
          />
        </div>
      </div>

      {(props.errorData.venueError ||
        props.errorData.artistError ||
        props.errorData.cityError ||
        props.errorData.dateError ||
        props.errorData.eventError ||
        props.errorData.stateError ||
        props.errorData.ticketNumError) && (
        <div className="flex w-screen items-center">
          <div className="alert alert-warning shadow-lg w-3/4 justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>
                Please complete all required sections before continuing!
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventPage;

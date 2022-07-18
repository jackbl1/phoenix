import { IErrorData, IFormData } from "../../../common/interfaces";
import { locationStateCity } from "../../../common/CityState";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "../../../../node_modules/react-datepicker/dist/react-datepicker.css";
import React from "react";
import ProgressBar from "../progressBar";

interface IEventPageProps {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
  errorData: IErrorData;
}

function EventPage(props: IEventPageProps) {
  const [currentCities, setCurrentCities] = useState(["Please select a state"]);

  let eventClassName = props.errorData.eventError
    ? "input input-bordered input-accent w-full max-w-xs p-5"
    : "input input-bordered input-warning w-full max-w-xs p-5";

  let artistClassName = props.errorData.artistError
    ? "input input-bordered input-accent w-full max-w-xs p-5"
    : "input input-bordered input-warning w-full max-w-xs p-5";

  let cityClassName = props.errorData.cityError
    ? "select select-bordered select-accent"
    : "select select-bordered select-warning";

  let stateClassName = props.errorData.stateError
    ? "select select-bordered select-accent"
    : "select select-bordered select-warning";

  let dateClassName = props.errorData.dateError
    ? "input input-bordered input-accent w-full max-w-xs p-5"
    : "input input-bordered input-warning w-full max-w-xs p-5";

  let ticketNumClassName = props.errorData.ticketNumError
    ? "input input-bordered input-accent w-full max-w-xs p-5"
    : "input input-bordered input-warning w-full max-w-xs p-5";

  let venueClassName = props.errorData.venueError
    ? "input input-bordered input-accent w-full max-w-xs p-5"
    : "input input-bordered input-warning w-full max-w-xs p-5";

  return (
    <div className="column-3 w-full p-5 gap-10 place-items-center flex flex-wrap">
      <ProgressBar stepNumber={1} />
      <div className="rows-span-2 mx-auto">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg">
              What are people coming for?
              {props.errorData.eventError ? "*" : ""}
            </span>
          </label>
          <input
            type="text"
            placeholder="ex. concert, comedy show, etc."
            className={eventClassName}
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
              Who is performing/ Who is putting it on?
              {props.errorData.artistError ? "*" : ""}
            </span>
          </label>
          <input
            type="text"
            placeholder="Ex. The Beatles, The Los Angeles Rams, Dave Chapelle, etc."
            className={artistClassName}
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
              {props.errorData.venueError ? "*" : ""}
            </span>
          </label>
          <input
            type="text"
            placeholder="Ex. The Filmore, John's Garage, etc."
            className={venueClassName}
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
                {props.errorData.dateError ? "*" : ""}
              </span>
            </label>
            <DatePicker
              className={dateClassName}
              selected={props.formData.date}
              onSelect={(input: any) => {
                props.setFormData({ ...props.formData, date: input });
              }}
              onChange={(input: any) => {
                props.setFormData({ ...props.formData, date: input });
              }}
            />
          </div>
        </div>
      </div>
      <div className="rows-span-2 mx-auto">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg">
              State? {props.errorData.stateError ? "*" : ""}
            </span>
          </label>
          <select
            className={stateClassName}
            value={props.formData.state}
            onChange={(e) => {
              props.setFormData({ ...props.formData, state: e.target.value });
              let tempCities: string[] = [];
              (locationStateCity[0] as { [key: string]: any })[
                e.target.value
              ].forEach((city: string) => {
                tempCities.push(city);
              });

              setCurrentCities(tempCities);
            }}
            required
          >
            <option>Pick one</option>
            {Object.keys(locationStateCity[0])
              .sort()
              .map((stateName) => {
                return <option>{stateName}</option>;
              })}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg">
              City? {props.errorData.cityError ? "*" : ""}
            </span>
          </label>
          <select
            className={cityClassName}
            value={props.formData.city}
            onChange={(e) => {
              props.setFormData({ ...props.formData, city: e.target.value });
            }}
            required
          >
            <option>Pick one</option>
            {currentCities.map((city) => {
              return <option>{city}</option>;
            })}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg ">
              How many people are coming?{" "}
              {props.errorData.ticketNumError ? "*" : ""}
            </span>
          </label>
          <input
            type="number"
            min="0"
            placeholder="Ex. 1000"
            className={ticketNumClassName}
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

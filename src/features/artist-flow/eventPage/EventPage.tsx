import { DatePicker } from "@fluentui/react";
import CustomDatePicker from "../../../components/CustomDatePicker";
import { IErrorData, IFormData } from "../../../common/interfaces";

interface IEventPageProps {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
  errorData: IErrorData;
}

function EventPage(props: IEventPageProps) {
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
            <span className="label-text font-patrick text-lg font-primary">What are people coming to see?</span>
            <label className="label">
            </label>
            <input type="text" placeholder="ex. concery, commedy show, etc." className="input input-bordered input-warning w-full max-w-xs p-5" 
              value={props.formData.event}
              onChange={(e) => {
              props.setFormData({ ...props.formData, event: e.target.value });
              }}
              required
            />
            <label className="label">
          </label>
        </div>


        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg font-primary">Who are people coming to see?</span>
          </label>
          <input type="text" placeholder="Ex. The Beatles, The Los Angeles Rams, Dave Chapelle, etc." className="input input-bordered input-warning w-full max-w-xs p-5" 
            value={props.formData.artist}
            onChange={(e) => {
              props.setFormData({ ...props.formData, artist: e.target.value });
            }}
            required
          />
          <label className="label">
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg ">What is the name of the venue?</span>
            </label>
            <input type="text" placeholder="Ex. The Filmore, John's Garage, etc." className="input input-bordered input-warning w-full max-w-xs p-5" 
              value={props.formData.venue}
              onChange={(e) => {
                props.setFormData({ ...props.formData, venue: e.target.value });
              }}
              required
            />
            <p className="error">{props.errorData.venueError}</p>
            <label className="label">
          </label>
        </div>

        <div className="flex items-center justify-center">
          <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
          <span className="label-text font-patrick text-lg ">When is it?</span>
            <input type="text"
              className="form-control block w-full max-w-xs p-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-warning rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Select a date" data-mdb-toggle="datepicker" 
                /*
                value={props.formData.date}
                onSelectDate={(input: any) => {
                  props.setFormData({ ...props.formData, date: input });
                }}
                isRequired
                */
              />
          </div>
        </div>

        </div>
        <div className="rows-span-2">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg ">City?</span>
            </label>
            <input type="text" placeholder="Ex. San Francisco" className="input input-bordered input-warning w-full max-w-xs p-5" 
              value={props.formData.city}
              onChange={(e) => {
                props.setFormData({ ...props.formData, city: e.target.value });
              }}
              required
            />
            <p className="error">{props.errorData.venueError}</p>
            <label className="label">
          </label>
        </div>
      
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg ">State?</span>
            </label>
            <input type="text" placeholder="Ex. California" className="input input-bordered input-warning w-full max-w-xs p-5" 
              value={props.formData.state}
              onChange={(e) => {
                props.setFormData({ ...props.formData, state: e.target.value });
              }}
              required
            />
            <p className="error">{props.errorData.venueError}</p>
            <label className="label">
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg ">How many tickets?</span>
            </label>
            <input type="text" placeholder="Ex. 1000" className="input input-bordered input-warning w-full max-w-xs p-5" 
              value={props.formData.ticketNum}
              onChange={(e) => {
                props.setFormData({
                  ...props.formData,
                  ticketNum: e.target.value as unknown as number,
                });
              }}
              required
            />
            <p className="error">{props.errorData.venueError}</p>
            <label className="label">
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-patrick text-lg ">Opening act or Experience?</span>
            </label>
            <input type="text" placeholder="Optional!" className="input input-bordered input-warning w-full max-w-xs p-5" 
              value={props.formData.opener}
              onChange={(e) => {
                props.setFormData({ ...props.formData, opener: e.target.value });
              }}
            />
            <label className="label">
          </label>
        </div>
      </div>
    </div>
  );
}

export default EventPage;

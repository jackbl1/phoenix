import CustomDatePicker from "../../components/CustomDatePicker";
import { IErrorData, IFormData } from "../../common/interfaces";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectArtist, updateArtist } from "../../app/redux";
import ImageUpload from "../../components/ImageUpload";

interface IPage2Props {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
  errorData: IErrorData;
}

function Page2(props: IPage2Props) {
  const artist = useAppSelector(selectArtist);
  const dispatch = useAppDispatch();
  return (
    <div className="artist-flow-body">
      <ImageUpload img="" attributeId="1" />
      <div className="artist-row">
        <div className="col">
          What are people coming to see?
          <br />
          <input
            className="input-style"
            type="text"
            placeholder="Ex. concert, comedy show, sports event, etc."
            value={props.formData.event}
            onChange={(e) => {
              props.setFormData({ ...props.formData, event: e.target.value });
            }}
            required
          />
          <p className="error">{props.errorData.eventError}</p>
          <br />
        </div>
        <div className="col">
          Who are people coming to see?
          <br />
          <input
            className="input-style"
            type="text"
            placeholder="Ex. The Beatles, The Los Angeles Rams, Dave Chapelle, etc."
            value={artist}
            onChange={(e) => {
              dispatch(updateArtist(e.target.value));
              props.setFormData({ ...props.formData, artist: e.target.value });
            }}
            required
          />
          <p className="error">{props.errorData.artistError}</p>
          <br />
          {/* <button className="addAnotherButton">+ add another?</button> */}
        </div>
      </div>
      <div className="artist-row">
        <div className="col">
          <a className="questionPrompt">What is the name of the venue?</a>
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
        <div className="col">
          <a className="questionPrompt">City?</a>
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
        <div className="col">
          <a className="questionPrompt">State?</a>
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
        <div className="col">
          <a className="questionPrompt">When is it?</a>
          {/* <DatePicker
            className="input-style"
            value={props.formData.date}
            onSelectDate={(input: any) => {
              props.setFormData({ ...props.formData, date: input });
            }}
            isRequired
          /> */}
          <CustomDatePicker
            formData={props.formData}
            setFormData={props.setFormData}
          />
        </div>
        <div className="col">
          <a className="questionPrompt">How many tickets?</a>
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
          <p className="error">{props.errorData.ticketNumError}</p>
        </div>
      </div>
      <div className="artist-row">
        <div className="col">
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
      <button className="addAnotherButton">+ Add Another Event?</button>
    </div>
  );
}

export default Page2;

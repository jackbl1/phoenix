import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { IErrorData, IFormData } from "../../../common/interfaces";
import { selectArtist, updateArtist } from "../../../app/redux";

interface IPage1Props {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
  errorData: IErrorData;
}

function Page1(props: IPage1Props) {
  const artist = useAppSelector(selectArtist);
  const dispatch = useAppDispatch();
  return (
    <div className="artist-flow-body">
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
      <br />
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
      <br />
    </div>
  );
}

export default Page1;

import { useState } from "react";
import BaseImageUpload from "../../common/BaseImageUpload";
import { IFormData } from "../../common/interfaces";
import "./Artist.css";

interface ISummaryPageProps {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
  baseImageFile: any;
  setBaseImageFile: (input: any) => void;
  baseImagePreview: any;
  setBaseImagePreview: (input: any) => void;
}

function SummaryPage(props: ISummaryPageProps) {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <p className="Home-title-container">Who and What?</p>
      <div className="row">
        <div className="dark-container">
          <div className="light-container-short">Event Name</div>
          {props.formData.event}
        </div>
        <div
          className="dark-container"
          onClick={() => {
            if (!edit) {
              setEdit(true);
            }
          }}
        >
          {edit && (
            <div>
              <input
                className="input-style"
                type="text"
                placeholder="Edit artist name"
                value={props.formData.artist}
                onChange={(e) => {
                  props.setFormData({
                    ...props.formData,
                    artist: e.target.value,
                  });
                }}
                required
              />
              <button onClick={() => setEdit(false)}>x</button>
            </div>
          )}
          <div className="light-container-short">Host Name</div>
          {props.formData.artist}
          <p className="small-text">click to edit</p>
        </div>
      </div>
      <p className="Home-title-container">When and Where?</p>
      <div className="row">
        <div className="dark-container">
          <div className="light-container-short">Venue</div>
          <div className="row">
            <div>{props.formData.venue}</div>
            <div>{props.formData.date.toString()}</div>
          </div>
          <div className="row">
            <div>{props.formData.city}</div>
            <div>{props.formData.ticketNum}</div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <p className="Home-title-container">Who and What?</p>
      <div className="row">
        <div className="dark-container">
          <div className="light-container-short">Event Name</div>
          {props.formData.event}
        </div>
        <div className="dark-container">
          <div className="light-container-short">Host Name</div>
          {props.formData.artist}
        </div>
      </div>
      <p className="Home-title-container">When and Where?</p>
      <div className="row">
        <div className="dark-container">
          <div className="light-container-short">Venue</div>
          <div className="row">
            <div>{props.formData.venue}</div>
            <div>{props.formData.date}</div>
          </div>
          <div className="row">
            <div>{props.formData.city}</div>
            <div>{props.formData.ticketNum}</div>
          </div>
        </div>
      </div>
      <p className="Home-title-container">NFT Rules and Attributes</p>
      <div className="row">
        <div className="dark-container">
          <BaseImageUpload
            baseImageFile={props.baseImageFile}
            setBaseImageFile={props.setBaseImageFile}
            baseImagePreview={props.baseImagePreview}
            setBaseImagePreview={props.setBaseImagePreview}
          />
        </div>
      </div>
      <div className="dark-container">
        <div className="row">
          <div className="light-container-short">
            <div className="col">
              <p>Attribute Category</p>
              <p>placeholder</p>
            </div>
            <div className="col">
              <p>Real World Value</p>
              <p>placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SummaryPage;

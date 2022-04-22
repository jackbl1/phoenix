import BaseImageUpload from "../../common/BaseImageUpload";
import { IFormData } from "../../common/interfaces";
import "../Styling.css";

interface ISummaryPageProps {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
  baseImageFile: any;
  setBaseImageFile: (input: any) => void;
  baseImagePreview: any;
  setBaseImagePreview: (input: any) => void;
}

function SummaryPage(props: ISummaryPageProps) {
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

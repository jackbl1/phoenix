import ImageUpload from "../../common/ImageUpload";
import { IFormData } from "../../common/interfaces";
import "../Styling.css";

interface ISummaryPageProps {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
  curFile: any;
  setCurFile: (input: any) => void;
  imgPreview: any;
  setImgPreview: (input: any) => void;
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
          <ImageUpload
            curFile={props.curFile}
            setCurFile={props.setCurFile}
            imgPreview={props.imgPreview}
            setImgPreview={props.setImgPreview}
          />
        </div>
      </div>
    </>
  );
}

export default SummaryPage;

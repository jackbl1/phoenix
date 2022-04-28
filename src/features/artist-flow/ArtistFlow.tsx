import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toolbar } from "../toolbar/Toolbar";
import "./Artist.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { Page3 } from "./Page3";
import { FORM_TITLES } from "../../common/constants";
import AttributePage from "./AttributePage";
import LotteryAttributePage from "./LotteryAttributePage";
import SummaryPage from "./SummaryPage";
import {
  validateCity,
  validateArtist,
  validateState,
  validateBaseAttributeFile,
  validateEvent,
  validateVenue,
  validateTicketNum,
} from "../../common/utilities";
import { IAttribute } from "../../common/interfaces";
import { Attribute } from "../../common/Attribute";

export function ArtistFlow() {
  const [page, setPage] = useState(0);
  const [guide, setGuide] = useState(false);

  const [baseImageFile, setBaseImageFile] = useState(new File([], ""));
  const [baseImagePreview, setBaseImagePreview] = useState(undefined);

  const [attributeImageFile, setAttributeImageFile] = useState(
    new File([], "")
  );
  const [attributeImagePreview, setAttributeImagePreview] = useState(undefined);

  const [lotteryImageFile, setLotteryImageFile] = useState(new File([], ""));
  const [lotteryImagePreview, setLotteryImagePreview] = useState(undefined);

  const guideHandler = (setting: boolean) => {
    setGuide(setting);
  };

  const validateFields = () => {
    if (page === 1) {
      const eventErrorText: string = validateEvent(formData.event);
      const artistErrorText: string = validateArtist(formData.artist);
      setErrorData({
        ...errorData,
        eventError: eventErrorText,
        artistError: artistErrorText,
      });
      return eventErrorText === "" && artistErrorText === "";
    }
    if (page === 2) {
      const venueErrorText: string = validateVenue(formData.venue);
      const cityErrorText: string = validateCity(formData.city);
      const stateErrorText: string = validateState(formData.state);
      const ticketNumErrorText: string = validateTicketNum(formData.ticketNum);
      setErrorData({
        ...errorData,
        venueError: venueErrorText,
        cityError: cityErrorText,
        stateError: stateErrorText,
        ticketNumError: ticketNumErrorText,
      });
      return (
        venueErrorText === "" &&
        cityErrorText === "" &&
        stateErrorText === "" &&
        ticketNumErrorText === ""
      );
    }
    if (page === 3) {
      const baseAttributeErrorText: string =
        validateBaseAttributeFile(baseImageFile);
      setErrorData({
        ...errorData,
        baseAttributeError: baseAttributeErrorText,
      });
      return baseAttributeErrorText === "";
    }
    return true;
  };

  const [formData, setFormData] = useState({
    event: "",
    artist: "",
    venue: "",
    date: new Date(),
    city: "",
    state: "",
    ticketNum: 0,
    level: "",
    opener: "",
  });

  const [attributes, setAttributes] = useState({
    venueAttribute: new Attribute(),
    dateAttribute: new Attribute(),
    cityAttribute: new Attribute(),
    stateAttribute: new Attribute(),
    ticketNumAttribute: new Attribute(),
    levelAttribute: new Attribute(),
    openerAttribute: new Attribute(),
  });

  const [errorData, setErrorData] = useState({
    eventError: "",
    artistError: "",
    venueError: "",
    dateError: "",
    cityError: "",
    stateError: "",
    ticketNumError: "",
    levelError: "",
    openerError: "",
    baseAttributeError: "",
  });

  const PageContent = () => {
    if (page === 1) {
      return (
        <Page1
          formData={formData}
          setFormData={setFormData}
          errorData={errorData}
        />
      );
    } else if (page === 2) {
      return (
        <Page2
          formData={formData}
          setFormData={setFormData}
          errorData={errorData}
        />
      );
    } else if (page === 3) {
      return (
        <Page3
          guideHandler={guideHandler}
          guide={guide}
          baseImageFile={baseImageFile}
          setBaseImageFile={setBaseImageFile}
          baseImagePreview={baseImagePreview}
          setBaseImagePreview={setBaseImagePreview}
        />
      );
    } else if (page === 4) {
      return (
        <AttributePage
          guideHandler={guideHandler}
          guide={guide}
          formData={formData}
          attributes={attributes}
          setAttributes={setAttributes}
        />
      );
    } else if (page === 5) {
      return (
        <LotteryAttributePage
          guideHandler={guideHandler}
          guide={guide}
          lotteryImageFile={lotteryImageFile}
          setLotteryImageFile={setLotteryImageFile}
          lotteryImagePreview={lotteryImagePreview}
          setLotteryImagePreview={setLotteryImagePreview}
          formData={formData}
        />
      );
    } else if (page === 6) {
      console.log("summary should load");
      return (
        <SummaryPage
          formData={formData}
          setFormData={setFormData}
          baseImageFile={baseImageFile}
          setBaseImageFile={setBaseImageFile}
          baseImagePreview={baseImagePreview}
          setBaseImagePreview={setBaseImagePreview}
          attributes={attributes}
          setAttributes={setAttributes}
        />
      );
    } else {
      return <></>;
    }
  };

  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <div className="App">
      <a className="navBar">
        <Toolbar />
      </a>
      <div className="Artist-page">
        <p className="artist-header">{FORM_TITLES[page]}</p>
        {page === 0 && (
          <div className="IntroLine">
            <p className="artist-subheader">
              <br></br>
              <br></br>
              We are going to run through some questions to get your own Event
              linked NFT drop ready to go!
            </p>
          </div>
        )}
        <div>{PageContent()}</div>
      </div>
      <div className="navigationButtons">
        <button
          className="navigation-button-style-back"
          onClick={() => {
            window.scrollTo(0, 0);
            if (page === 0) {
              routeChange("/");
            }
            setPage((currentPage) => currentPage - 1);
          }}
        >
          Back
        </button>
        <button
          className="navigation-button-style-next"
          disabled={page === FORM_TITLES.length - 1}
          onClick={() => {
            window.scrollTo(0, 0);
            if (validateFields()) setPage((currentPage) => currentPage + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toolbar } from "../toolbar/Toolbar";
import "./Artist.css";
import EventPage from "./eventPage/EventPage";
import { BaseAttributePage } from "./baseAttributePage/BaseAttributePage";
import { FORM_TITLES } from "../../common/constantsText";
import AttributePage from "./attributePage/AttributePage";
import LotteryAttributePage from "./lotteryAttributePage/LotteryAttributePage";
import SummaryPage from "./summaryPage/SummaryPage";
import {
  validateCity,
  validateArtist,
  validateState,
  validateBaseAttributeFile,
  validateEvent,
  validateVenue,
  validateTicketNum,
  autoFillProps,
} from "../../common/utilities";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAttributes, setAttributes } from "../../app/redux";

export function ArtistFlow() {
  const [page, setPage] = useState(0);
  const [guide, setGuide] = useState(false);

  const guideHandler = (setting: boolean) => {
    setGuide(setting);
  };

  const validateFields = () => {
    if (page === 1) {
      const eventErrorText: string = validateEvent(formData.event);
      const artistErrorText: string = validateArtist(formData.artist);
      const venueErrorText: string = validateVenue(formData.venue);
      const cityErrorText: string = validateCity(formData.city);
      const stateErrorText: string = validateState(formData.state);
      const ticketNumErrorText: string = validateTicketNum(formData.ticketNum);
      setErrorData({
        ...errorData,
        eventError: eventErrorText,
        artistError: artistErrorText,
        venueError: venueErrorText,
        cityError: cityErrorText,
        stateError: stateErrorText,
        ticketNumError: ticketNumErrorText,
      });
      return (
        eventErrorText === "" &&
        artistErrorText === "" &&
        venueErrorText === "" &&
        cityErrorText === "" &&
        stateErrorText === "" &&
        ticketNumErrorText === ""
      );
    }
    if (page === 2) {
      const baseAttributeErrorText: string = "";
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
    buyDate: "",
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
        <EventPage
          formData={formData}
          setFormData={setFormData}
          errorData={errorData}
        />
      );
    } else if (page === 2) {
      return <BaseAttributePage guideHandler={guideHandler} guide={guide} />;
    } else if (page === 3) {
      return (
        <AttributePage
          guideHandler={guideHandler}
          guide={guide}
          formData={formData}
        />
      );
    } else if (page === 4) {
      return (
        <LotteryAttributePage
          guideHandler={guideHandler}
          guide={guide}
          formData={formData}
        />
      );
    } else if (page === 5) {
      return <SummaryPage formData={formData} setFormData={setFormData} />;
    } else {
      return <></>;
    }
  };

  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  const attributes = useAppSelector(selectAttributes);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
        <Toolbar />
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
      <br />
      <br />
      <br />
      <br />
      {page === 0 && (
        <div className="navigationButtons">
          <button
            className="navigation-button-style-next"
            disabled={page === FORM_TITLES.length - 1}
            onClick={() => {
              window.scrollTo(0, 0);
              const [sampleFormData, sampleAttributes] = autoFillProps();
              dispatch(setAttributes(sampleAttributes));
              setFormData(sampleFormData);
              setPage(5);
            }}
          >
            Autofill & take me to summary
          </button>
        </div>
      )}
    </div>
  );
}

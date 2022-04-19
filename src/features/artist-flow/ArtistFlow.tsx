import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toolbar } from "../toolbar/Toolbar";
import "../Styling.css";
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
} from "../../common/utilities";

export function ArtistFlow() {
  const [page, setPage] = useState(0);
  const [guide, setGuide] = useState(false);
  const [baseImageFile, setBaseImageFile] = useState(new File([], ""));
  const [baseImagePreview, setBaseImagePreview] = useState(undefined);

  const [attributeImageFile, setAttributeImageFile] = useState(undefined);
  const [attributeImagePreview, setAttributeImagePreview] = useState(undefined);

  const [lotteryImageFile, setLotteryImageFile] = useState(undefined);
  const [lotteryImagePreview, setLotteryImagePreview] = useState(undefined);

  const guideHandler = (setting: boolean) => {
    setGuide(setting);
  };

  const validateFields = () => {
    if (page === 1) {
      const error: string = validateArtist(formData.artist);
      setErrorData({ ...errorData, artistError: error });
      return error.length === 0;
    }
    if (page === 2) {
      const cityError: string = validateCity(formData.city);
      const stateError: string = validateState(formData.state);
      setErrorData({
        ...errorData,
        cityError: cityError,
        stateError: stateError,
      });
      return cityError === "" && stateError === "";
    }
    if (page === 3) {
      return validateBaseAttributeFile(baseImageFile) === "";
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
          attributeImageFile={attributeImageFile}
          setAttributeImageFile={setAttributeImageFile}
          attributeImagePreview={attributeImagePreview}
          setAttributeImagePreview={setAttributeImagePreview}
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
        />
      );
    } else if (page === 6) {
      return (
        <SummaryPage
          formData={formData}
          setFormData={setFormData}
          baseImageFile={baseImageFile}
          setBaseImageFile={setBaseImageFile}
          baseImagePreview={baseImagePreview}
          setBaseImagePreview={setBaseImagePreview}
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
          <p className="artist-subheader">
            We are going to run through some questions to get your own Event
            linked NFT drop ready to go!
          </p>
        )}
        <div>{PageContent()}</div>
        <div className="artist-row">
          <button
            className="navigation-button-style-back"
            onClick={() => {
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
              if (validateFields()) setPage((currentPage) => currentPage + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

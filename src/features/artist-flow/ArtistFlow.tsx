import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toolbar from "../toolbar/Toolbar";
import { Footer } from "../footer/Footer";
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
import MintCollectionPage from "./mintCollectionPage/MintCollectionPage";
import { environmentVariables } from "../../app/environmentVariables";
import V1Page from "./v1Page/v1Page";
import V1SummaryPage from "./v1Page/V1SummaryPage";

export function ArtistFlow() {
  const [page, setPage] = useState(0);
  const [guide, setGuide] = useState(false);
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

  const V2PageContent = () => {
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
    } else if (page === 6) {
      return <MintCollectionPage />;
    } else {
      return <></>;
    }
  };

  const V1PageContent = () => {
    if (page === 1) {
      return (
        <EventPage
          formData={formData}
          setFormData={setFormData}
          errorData={errorData}
        />
      );
    } else if (page === 2) {
      return (
        <V1Page guideHandler={guideHandler} guide={guide} formData={formData} />
      );
    } else if (page === 3) {
      return <V1SummaryPage formData={formData} setFormData={setFormData} />;
    }
  };

  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  const attributes = useAppSelector(selectAttributes);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-primary min-h-screen">
      <Toolbar isOpaque={true} />
      <div className="flex">
        {page === 0 && (
          <div className="hero place-items-center">
            <div className="hero-content text-center m-20">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold font-script text-secondary">
                  Hey There
                </h1>
                <p className="py-6 text-xl font-patrick">
                  You are 6 short steps away from having your very own
                  personalize NFT drop! We just need some information and images
                  from you. <br></br>
                  <br></br>If you are confused at any time, we have video
                  tutorials linked in the FAQ section or you can join our
                  discord and we'd be more than happy to help.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {environmentVariables.V2ArtistFlow ? V2PageContent() : V1PageContent()}
      </div>
      <div className="w-full flex bottom-0">
        <button
          className="btn btn-warning left-0 m-5"
          onClick={() => {
            window.scrollTo(0, 0);
            if (page === 0) {
              routeChange("/");
            }
            setPage((currentPage) => currentPage - 1);
          }}
        >
          {" "}
          Back
        </button>
        <button
          className="btn btn-secondary right-0 m-5"
          onClick={() => {
            window.scrollTo(0, 0);
            if (
              environmentVariables.V2ArtistFlow &&
              validateFields() &&
              page < 6
            ) {
            } else if (validateFields() && page < 3)
              setPage((currentPage) => currentPage + 1);
          }}
        >
          Next
        </button>
      </div>
      {/* {page === 0 && (
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
      )} */}
      <Footer />
    </div>
  );
}

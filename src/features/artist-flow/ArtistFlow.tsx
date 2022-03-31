import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toolbar } from "../toolbar/Toolbar";
import "./ArtistFlow.css";
import Page1 from "./Page1";
import Page2 from "./Page2";

export function ArtistFlow() {
  const [page, setPage] = useState(0);
  const formTitles = [
    "",
    "Who and What?",
    "When and Where?",
    "Now the fun stuff.",
  ];

  const [formData, setFormData] = useState({
    event: "",
    artist: "",
    venue: "",
    date: "",
    city: "",
    state: "",
    ticketNum: 0,
    level: "",
    opener: "",
  });

  const PageContent = () => {
    if (page === 1) {
      return <Page1 formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Page2 formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <></>;
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
      <div className="App-page">
        <p className="title-container">{formTitles[page]}</p>
        {page === 0 && (
          <p className="subtitle-container">
            We are going to run through some questions to get your own Event
            linked NFT drop ready to go!
          </p>
        )}
        <div>{PageContent()}</div>
        <div className="row">
          <button
            className="button-style"
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
            className="navigation-button-style"
            disabled={page === formTitles.length - 1}
            onClick={() => setPage((currentPage) => currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

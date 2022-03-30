import { useState } from "react";
import { Toolbar } from "../toolbar/Toolbar";
import "./ArtistFlow.css";

export function ArtistFlow() {
  const [page, setPage] = useState(0);
  const formTitles = [
    "",
    "Who and What?",
    "When and Where?",
    "Now the fun stuff.",
  ];
  return (
    <div className="App">
      <a className="navBar">
        <Toolbar />
      </a>
      <div className="App-page">
        <div className="App-header">
          <p className="title-container">{formTitles[page]}</p>
          {page === 0 && (
            <p className="subtitle-container">
              We are going to run through some questions to get your own Event
              linked NFT drop ready to go!
            </p>
          )}
          <div className="row">
            <button
              className="button-style"
              disabled={page === 0}
              onClick={() => setPage((currentPage) => currentPage - 1)}
            >
              Back
            </button>
            <button
              className="button-style"
              disabled={page === formTitles.length - 1}
              onClick={() => setPage((currentPage) => currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

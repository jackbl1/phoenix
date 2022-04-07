import logo from "../../assets/logo.svg";
import { Toolbar } from "../toolbar/Toolbar";
import "./About.css";

export function About() {
  return (
    <div className="App">
      <a className="navBar">
        <Toolbar />
      </a>
      <div className="App-page">
        <header className="App-header">
          <p className="subtitle-container">About us.</p>
          Troy - CEO & Co-founder
          <br />
          Troy has experience with product management at Microsoft [insert
          microsoft product experience].
          <br />
          Jack - CTO & Co-founder
          <br />
          Jack has experience as a software engineer at Microsoft where he has
          experience with building resilient microservice architecture that
          served billions of requests. He has spent the past year on UX
          development as well. He has been an avid web3 researcher for a few
          years and is active in many web3 communities.
          <br />
          Jacob - CPO & Co-founder
          <br />
          [Fill in one sentence about Jacob]
        </header>
      </div>
    </div>
  );
}

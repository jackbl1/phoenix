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
          <div className="row">
          <p className="FounderProfile">
          <p className="FounderTitle">Troy - CEO & Co-founder</p>
          Troy has spent the past three years in product at Microsoft 
          where he has shipped backend and user facing products. From internal SDK’s to Windows 
          experiences he has had the opportunity to ship features that are used by hundreds of millions 
          of users today. <br></br> He has been investing in, learning about, and getting involved with 
          the Web3 space for a little over a year now and wants to work to bring the amazing promises of 
          Web3 to the masses.
          <br />
          </p>
          <p className="FounderProfile">
          <p className="FounderTitle">Jack - CTO & Co-founder</p>
          <br />
          Jack has experience as a software engineer at Microsoft where he has
          experience with building resilient microservice architecture that
          served billions of requests. He has spent the past year on UX
          development as well. He has been an avid web3 researcher for a few
          years and is active in many web3 communities.
          <br />
          </p>
          <p className="FounderProfile">
          <p className="FounderTitle">Jacob - CPO & Co-founder</p>
          <br />
          [Fill in one sentence about Jacob]
          </p>
          </div>
        </header>
      </div>
    </div>
  );
}

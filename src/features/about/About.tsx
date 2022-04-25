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
          <p className="subtitle-container">Welcome!<br></br>- the Team.</p>
          <div className="row">
          <p className="FounderProfile">
          <p className="FounderTitle">Troy, CEO & Co-founder</p>
          Troy has spent the past three years in product at Microsoft 
          where he has shipped products from natural language understanding SDK’s to AI powered Windows 
          experiences. He has had the opportunity to ship features that are used by hundreds of millions 
          of users today. <br></br> In the past year Troy has been investing in, learning about, and getting 
          involved with the Web3 space and wants to work to bring the amazing promises of Web3 to the masses.
          <br />
          </p>
          <p className="FounderProfile">
          <p className="FounderTitle">Jack, CTO & Co-founder</p>
          <br />
          Jack has experience as a software engineer at Microsoft where he has
          experience with building resilient microservice architecture that
          served billions of requests. He has spent the past year on UX
          development as well.<br></br>He has been an avid web3 researcher for a few
          years and is active in many web3 communities.
          <br />
          </p>
          <p className="FounderProfile">
          <p className="FounderTitle">Jacob, CPO & Co-founder</p>
          <br />
          Jacob is a musician that has made several EPs and has performed in his own band.<br></br> 
          Jacob has 4 years of experience as a professional audio engineer. He has worked on Emmy, 
          Grammy, and Oscar winning projects and has toured in 4 continents with notable artists
          </p>
          </div>
        </header>
      </div>
    </div>
  );
}

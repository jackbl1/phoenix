import { Toolbar } from "../toolbar/Toolbar";
import "./About.css";
import discordLogo from "../../assets/LinkedInLogo.png";
import instalogo from "../../assets/Instagram_logo.png";
import twittalogo from "../../assets/Twitter_logo.png";
import mediumLogo from "../../assets/MediumLogo.png";
import troyPic from "../../assets/TroyNohra.png";
import jackPic from "../../assets/JackBloomfeld.png";

export function About() {
  return (
    <div className="App">
      <a className="navBar">
        <Toolbar />
      </a>
      <div className="App-page">
        <header className="App-header">
          <p className="subtitle-container">
            Welcome!<br></br>- the Team.
          </p>
          <div className="row">
            <p className="FounderProfile">
              <img src={troyPic} className="FounderPicture" alt="" />
              <p className="FounderTitle">
                Troy Nohra<br></br>CEO & Co-founder
              </p>
              <div className="row">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/troy-nohra-538105114/"
                  className="SocialButton"
                >
                  <img src={discordLogo} className="DiscordLogo" alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/troynohra/"
                  className="SocialButton"
                >
                  <img src={instalogo} className="DiscordLogo" alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/troynohra"
                  className="SocialButton"
                >
                  <img src={twittalogo} className="DiscordLogo" alt="" />
                </a>
              </div>
              Troy has spent the past three years in product at Microsoft where
              he has shipped products from natural language understanding SDK’s
              to AI powered Windows experiences. He has had the opportunity to
              ship features that are used by hundreds of millions of users
              today. <br></br> In the past year Troy has been investing in,
              learning about, and getting involved with the Web3 space and wants
              to work to bring the amazing promises of Web3 to the masses.
            </p>
            <p className="FounderProfile">
              <img src={jackPic} className="FounderPicture" alt="" />
              <p className="FounderTitle">
                Jack Bloomfeld<br></br>CTO & Co-founder
              </p>
              <div className="row">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/jack-bloomfeld-90357b112/"
                  className="SocialButton"
                >
                  <img src={discordLogo} className="DiscordLogo" alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@jackbloomfeld1"
                  className="SocialButton"
                >
                  <img src={mediumLogo} className="DiscordLogo" alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/Jub11111"
                  className="SocialButton"
                >
                  <img src={twittalogo} className="DiscordLogo" alt="" />
                </a>
              </div>
              Jack has experience as a software engineer at Microsoft where he
              worked on building resilient microservice architecture for the
              commerce team that served billions of requests to customers. He
              has spent the past year as a full stack engineer for the
              experimentation (A/B testing) platform as well.<br></br>He has
              been an avid web3 researcher for many years and is active in many
              web3 communities.
              <br />
            </p>
            <p className="FounderProfile">
              <img src={troyPic} className="FounderPicture" alt="" />
              <p className="FounderTitle">
                Jacob Moreno<br></br>CPO & Co-founder
              </p>
              <div className="row">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                  className="SocialButton"
                >
                  <img src={discordLogo} className="DiscordLogo" alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                  className="SocialButton"
                >
                  <img src={instalogo} className="DiscordLogo" alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                  className="SocialButton"
                >
                  <img src={twittalogo} className="DiscordLogo" alt="" />
                </a>
              </div>
              Jacob is a musician that has made several EPs and has performed in
              his own band.<br></br>
              Jacob has 4 years of experience as a professional audio engineer.
              He has worked on Emmy, Grammy, and Oscar winning projects and has
              toured in 4 continents with notable artists
            </p>
          </div>
        </header>
      </div>
    </div>
  );
}

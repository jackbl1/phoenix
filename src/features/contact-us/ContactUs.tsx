import { Toolbar } from "../toolbar/Toolbar";
import "../about/About.css";
import discordLogo from "../../assets/DiscordLogo.png";
import twittalogo from "../../assets/Twitter_logo.png";
import emailLogo from "../../assets/EmailLogo.png";

export function ContactUs() {
  return (
    <div className="App">
        <Toolbar />
      <div className="App-page">
        <header className="App-header">
          <p className="subtitle-container">
            Reach out to us by...<br></br>
          </p>
          <div className="row-principals">
            <p className="ContactUs">
            <div className="row">
              <p className="FounderTitle">
                Joining our Discord
              </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.gg/VxmG5VfM"
                  className="SocialButton"
                >
                  <img src={discordLogo} className="ReachIcon" alt="" />
                </a>
                </div>
                This is a great place for... <br></br>
                1. Getting connected with the community. <br></br>
                2. Having continued conversation with the Phoenix team. <br></br>
                3. Promoting projects
            </p>
                <p className="ContactUs">
                  <div className="row">
                  <p className="FounderTitle">
                  Sending us an Email
                  </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:troy.nohra@gmail.com"
                  className="SocialButton"
                >
                  <img src={emailLogo} className="ReachIcon" alt="" />
                </a>
                </div>
                This is a great place for... <br></br>
                1. Getting quick responses for issues.
                </p>            
                <p className="ContactUs">
                <div className="row">
                  <p className="FounderTitle">
                    Messaging or Mentioning Us
                  </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/phoenix_studio_"
                  className="SocialButton"
                >
                  <img src={twittalogo} className="ReachIcon" alt="" />
                </a>
                </div>
                This is a great place for... <br></br>
                1. Sending us praise! <br></br>
                2. Promoting a Project! <br></br>
            </p>
          </div>
        </header>
      </div>
    </div>
  );
}

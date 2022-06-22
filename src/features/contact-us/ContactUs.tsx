import { Toolbar } from "../toolbar/Toolbar";
import "../about/About.css";
import discordLogo from "../../assets/DiscordLogo.png";
import twittalogo from "../../assets/Twitter_logo.png";
import instalogo from "../../assets/Instagram_logo.png";
import emailLogo from "../../assets/EmailLogo.png";

export function ContactUs() {
  return (
    <div className="App">
        <Toolbar />
      <div className="App-page">
        <header className="App-header">
          <p className="subtitle-container">
            Contact Us<br></br>
          </p>
          <div className="row">
            <p className="FounderProfile">
              <div className="row">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.gg/2fsDb2XuM3"
                  className="SocialButton"
                >
                  <img src={discordLogo} className="DiscordLogo" alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/phoenix_labs_/"
                  className="SocialButton"
                >
                  <img src={instalogo} className="DiscordLogo" alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/phoenix_labs_"
                  className="SocialButton"
                >
                  <img src={twittalogo} className="DiscordLogo" alt="" />
                </a>
              </div>
              Please reach out through any of the above channels if you'd like
              to get in touch.
            </p>
          </div>
        </header>
      </div>
    </div>
  );
}

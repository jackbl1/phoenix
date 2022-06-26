import { useNavigate } from "react-router-dom";
import { Toolbar } from "../toolbar/Toolbar";
import { Footer } from "../footer/Footer";
import discordLogo from "../../assets/DiscordLogo.png";
import instalogo from "../../assets/Instagram_logo.png";
import twittalogo from "../../assets/Twitter_logo.png";
import productGIF from "../../assets/preview.gif";
import shakeIcon from "../../assets/Shake.png";
import toolIcon from "../../assets/Tools.png";
import bicepIcon from "../../assets/bicep.png";
import phoenixLogo from "../../assets/PhoenixLogo.png";

export function Home() {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <div className="App">
      <Toolbar />

      <div className="Home-page">
        <div className="Home-header">
          <p className="Home-title-container"></p>
          <p className="TagLine">
            Connect with fans,<br></br>Build your Brand.
          </p>
          <p className="ElevatorPitch">
            Phoenix empowers artists to create customized NFT drops that link to
            their tickets in four easy steps. Artists use them to build lasting
            relationships with fans, grow their following, and bring in some
            extra cash.<br></br>
            <br></br>Fans can get their NFTs by showing us their ticket!
            Easy-peasy.
          </p>
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
              href="https://www.instagram.com/phoenix_studio___/"
              className="SocialButton"
            >
              <img src={instalogo} className="DiscordLogo" alt="" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/phoenix_studio_"
              className="SocialButton"
            >
              <img src={twittalogo} className="DiscordLogo" alt="" />
            </a>
          </div>
          <div className="BreakInPage">
            <p>
              <img src={productGIF} className="ProdGIF" alt="" />
            </p>
          </div>
          <p className="guidePrincipals">Guiding Principles</p>
          <div className="row-principals">
            <div className="MissionGoal">
              <div className="row-goal">
                Artist, First and Foremost.{" "}
                <img src={shakeIcon} className="ShakeIcon" alt="" />
              </div>
              <p className="MissonDetails">
                We are giving power back to the content creators, not the
                middlemen. Phoenix is built to be simple for artists. No
                knowledge of NFTs or blockchains is required to utilize NFT
                technology.
              </p>
            </div>
            <div className="MissionGoal">
              <div className="row-goal">
                Tools to enhance your fanbase.{" "}
                <img src={toolIcon} className="ShakeIcon" alt="" />
              </div>
              <p className="MissonDetails">
                Artists can decide not only how attributes in the NFT are
                presented, but also what they entail. Fans can get rewards such
                as early release music, signed memorabilia, or anything else the
                artist thinks up.
              </p>
            </div>
            <div className="MissionGoal">
              <div className="row-goal">
                Building value add Art that lasts.{" "}
                <img src={bicepIcon} className="ShakeIcon" alt="" />
              </div>
              <p className="MissonDetails">
                In an increasingly digital world, album art, ticketing, and
                other lasting art forms are being left out and forgotten. We are
                enabling artist to harness a new art form that incentivizes fans
                to find early and keep, adding them to a community built by the
                artist.
              </p>
            </div>
          </div>
          <p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Phoenix is currently in development and will be available soon for
            artists and concert-goers
            <br></br>
            <br></br>
            <br></br>
            <p className="ElevatorPitch">
              To find out more on what we're building and how it will work check
              out our social media or read our docs linked on the top of the
              page.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br> <br></br>
            <br></br> <br></br>
            <br></br>
            <br></br>
          </p>
          {/* <p>
            Buttons below are in prototype phase and will not be published to
            the website
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="home-row">
            <button
              className="home-button-style"
              onClick={() => routeChange("mint")}
            >
              Get my NFT <br></br> (Fans)
            </button>
            <button
              className="home-button-style"
              onClick={() => routeChange("create")}
            >
              Create NFT drop <br></br> (Artists)
            </button>
          </div>
  */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

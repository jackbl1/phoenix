import { useNavigate } from "react-router-dom";
import { Toolbar } from "../toolbar/Toolbar";
import "./Home.css";
import discordLogo from "../../assets/discord-mascot.png";
import instalogo from "../../assets/Instagram_logo.png";
import twittalogo from "../../assets/Twitter_logo.png";
import dots from "../../assets/dots.png";
import productGIF from "../../assets/preview.gif";

export function Home() {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <div className="App">
      <a className="navBar">
        <Toolbar />
      </a>
      <div className="Home-page">
        <header className="Home-header">
          <p className="Home-title-container"></p>
          <p className="TagLine">
            Artist First.<br></br>Making NFTs Stupid Simple.
          </p>

          <p className="ElevatorPitch">
            Phoenix empowers artists to create customized NFT drops in four easy
            steps, use them to build lasting relationships with fans, and bring
            in some extra cash.<br></br>Fans can mint NFTs by showing us their
            ticket! Easy-peasy.
          </p>
          <div className="row">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/jh5uEccp"
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
          <div className="row">
            <p>
              <img src={productGIF} className="ProdGIF" alt="" />
            </p>
          </div>
          <p>Guiding Principles</p>
          <div className="row">
            <div className="MissionGoal">
              Artist, First and Foremost<br></br>
              <p className="MissonDetails">
                We are giving power back to the content creators, not the
                middlemen. Phoenix is built to be simple for artists. No
                knowledge of NFTs or blockchains is required to utilize NFT
                technology.
              </p>
            </div>
            <div className="MissionGoal">
              Tools to enhance your fanbase
              <p className="MissonDetails">
                Rewards such early release music, signed memorabilia, and
                anything else can be distributed to fans with our platform.
                Artists can design their NFT collection to gift rare perks at
                minting or airdrop the gifts to NFT holders.
              </p>
            </div>
            <div className="MissionGoal">
              Build Lasting Art
              <p className="MissonDetails">
                In an increasingly digital world album art, ticketing, and other
                lasting art forms are being left out of the process. We are
                enabling artist to release a new art form that fans can hold
                onto and get perks with.
              </p>
            </div>
          </div>
          <p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Phoenix is currently in development and will be available soon for
            artists and concert-goers
          </p>

          <p>
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
            <button className="home-button-style"> Mint my NFT </button>
            <button
              className="home-button-style"
              onClick={() => routeChange("create")}
            >
              Create NFT drop
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { Toolbar } from "../toolbar/Toolbar";
import "./Home.css";
import discordLogo from "../../assets/discord-mascot.png"
import instalogo from "../../assets/Instagram_logo.png"
import twittalogo from "../../assets/Twitter_logo.png"
import dots from "../../assets/dots.png";

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
            Artist First.<br></br>Making NFT's Stupid Simple.
          </p>

          <p className="ElevatorPitch">
            Phoenix empowers artists to create customized NFT drops in four 
            easy steps, and use them to build lasting relationships with fans 
            and bring in some extra cash.<br></br>Fans can mint by uploading their 
            ticket QR code! Easy-peasy.
          </p>
          <div className="row">
          <button className="SocialButton">
            <img src={discordLogo} className="DiscordLogo" alt="" />
              </button>            
          <button className="SocialButton">
            <img src={instalogo} className="DiscordLogo" alt="" />
              </button>            
          <button className="SocialButton">
            <img src={twittalogo} className="DiscordLogo" alt="" />
              </button>
          </div>
          <div className="row">
            <p>put gif of flow here</p>
          </div>
          <div className="row">
            <div className="MissionGoal">
              Artist, First and Foremost<br></br> 
              <p className="MissonDetails">
                Phoenix is built to be simple. No knowledge of NFTs or
                blockchains is required to use this platform.
              </p>
            </div>
            <div className="MissionGoal">
              Tools to enhance your fanbase
              <p className="MissonDetails">
                Rewards such as merchandise or free tickets can be given to fans
                through our platform. Artists can design their NFT collection to
                contain rare perks that will grant a fan one of these rewards.
              </p>
            </div>
            <div className="MissionGoal">
              Build Lasting Art
              <p className="MissonDetails">
                In a world where physical ticket stubs no longer exist, these
                Phoenix NFTs will be the digital collectible. Artists can reward
                and interact with fans that collect the most Phoenix NFTs.
              </p>
            </div>
          </div>
          <p>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
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

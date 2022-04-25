import { useNavigate } from "react-router-dom";
import { Toolbar } from "../toolbar/Toolbar";
import "../Styling.css";
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
      <img src={dots} className="dot1" alt="logo" />
        <img src={dots} className="dot2" alt="logo" />
        <header className="Home-header">
          <p className="Home-title-container">Phoenix (pending)</p>
          <p>
            Phoenix is an artist focused NFT platform that empowers artists to
            connect and grow their fanbase.
          </p>

          <p>
            Artists will use Phoenix to turn their concert tickets into an NFT
            collection. Our platform helps artists design and release their
            custom NFT collecton. Then the concert-goers will mint an NFT for
            free by scanning the ticket after the event.
          </p>

          <div className="row">
            <div className="dark-container">
              Artist Focused
              <p>
                Phoenix is built to be simple. No knowledge of NFTs or
                blockchains is required to use this platform.
              </p>
            </div>

            <div className="dark-container">
              Connect and Grow Your Fanbase
              <p>
                Rewards such as merchandise or free tickets can be given to fans
                through our platform. Artists can design their NFT collection to
                contain rare perks that will grant a fan one of these rewards.
              </p>
            </div>

            <div className="dark-container">
              Collectible Ticket-NFT Market
              <p>
                In a world where physical ticket stubs no longer exist, these
                Phoenix NFTs will be the digital collectible. Artists can reward
                and interact with fans that collect the most Phoenix NFTs.
              </p>
            </div>
          </div>

          <p>
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

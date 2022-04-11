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
          <p className="Home-title-container">
            Get on the radar.<br></br>Expand your brand.
          </p>
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

import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Counter } from "../counter/Counter";
import { Toolbar } from "../toolbar/Toolbar";
import "./Home.css";

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
      <div className="App-page">
        <header className="App-header">
          <p className="subtitle-container">
            Get on the radar. Expand your brand.
          </p>
          <a className="dot1">.</a>
          <div className="row">
            <button className="button-style">Mint my NFT</button>
            <button
              className="button-style"
              onClick={() => routeChange("create")}
            >
              Create NFT drop
            </button>
          </div>
          <a className="dot2">.</a>
        </header>
      </div>
    </div>
  );
}

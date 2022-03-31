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
          <p className="title-container"></p>
          <p className="subtitle-container">About us.</p>
          We are a team of 3 entrepeneurial young fellows looking to enhance the
          music industry with the power of web3.
        </header>
      </div>
    </div>
  );
}

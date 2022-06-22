import "./Toolbar.css";
import phoenixLogo from "../../assets/PhoenixLogo.png";

export function Toolbar() {
  return (
    <header className="header">
      <a href="/">
        {" "}
        <img src={phoenixLogo} className="navLogo" alt="logo" />
      </a>

      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>

      <nav className="navBar">
        <ul className="menu">
          <li>
            <a className="navButton" href="about">
              About us
            </a>
          </li>
          <li>
            <a className="navButton" href="documentation">
              FAQ
            </a>
          </li>
          <li>
            <a className="navButton" href="contact-us">
              Contact
            </a>
          </li>
          {/* <li>
            <a className="walletButton" href="#">
              Connect Wallet
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

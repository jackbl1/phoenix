import "./Toolbar.css";
import phoenixLogo from "../../assets/PhoenixLogo.png";

export function Toolbar() {
  return (
    <nav className="navBar">
      <a href="/">
        {" "}
        <img src={phoenixLogo} className="navLogo" alt="logo" />
      </a>
      <ul>
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
        <li>
          <a className="walletButton" href="#">
            Connect Wallet
          </a>
        </li>
      </ul>
    </nav>
  );
}

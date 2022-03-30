import "./Toolbar.css";
import radarLogo from "../../assets/RadarLogo.png";

export function Toolbar() {
  return (
    <nav className="navBar">
      <a href="Home">
        {" "}
        <img src={radarLogo} className="appLogo" alt="logo" />
      </a>
      <ul>
        <li>
          <a className="navButton" href="FAQ">
            FAQ
          </a>
        </li>
        <li>
          <a className="navButton" href="Contact">
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

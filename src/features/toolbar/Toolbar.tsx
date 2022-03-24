import styles from "./Toolbar.module.css";
import "./Toolbar.css";

export function Toolbar() {
  return (
    <nav>
      <a className="navLogo" href="Home">RADAR</a>
        <ul>
          <li><a className="navButton" href ="FAQ">FAQ</a></li>
          <li><a className="navButton" href ="Contact">Contact</a></li>
          <li><a className="walletButton" href ="#">Connect Wallet</a></li>
        </ul>
    </nav>
  );
}

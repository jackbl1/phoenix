import styles from "./Toolbar.module.css";

export function Toolbar() {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>

    // <div className={styles.toolbar}>
    //   <div className={styles.row}>
    //     logo
    //     <button className={styles.leftbutton} aria-label="Radar logo button">
    //       Radar
    //     </button>
    //     <button className={styles.rightbutton} aria-label="Help button">
    //       Help
    //     </button>
    //     <button className={styles.rightbutton} aria-label="Profile button">
    //       Profile
    //     </button>
    //   </div>
    // </div>
  );
}

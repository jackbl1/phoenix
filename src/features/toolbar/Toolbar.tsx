import phoenixLogo from "../../assets/PhoenixLogo.png";

export function Toolbar() {
  return (
    <header>
      <div className="navbar bg-primary  p-5">
        <div className="navbar-start">
          <a className="w-16 md:w-32 lg:w-48" href="/">
            <img src={phoenixLogo} className="" alt="logo" />
          </a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal p-0 text-red-700 xs:text-xs sm:text-sm md:text-md lg:text-lg font-patrick">
            <li>
              <a href="about">About us</a>
            </li>
            <li>
              <a href="documentation">FAQ</a>
            </li>
            <li>
              <a href="contact-us">Contact Us</a>
            </li>
          </ul>
          {/* <a className="btn bg-secondary w-16 md:w-32 lg:w-48 xs:text-xs sm:text-xs md:text-md lg:text-lg font-patrick">Connect Wallet</a> */}
        </div>
      </div>
    </header>
  );
}

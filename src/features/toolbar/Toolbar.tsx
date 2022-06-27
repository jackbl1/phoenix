import phoenixLogo from "../../assets/PhoenixLogo.png";

export function Toolbar() {
  return (
  <header>
    <div className="navbar bg-gradient-to-r from-warning to-secondary">
      <div className="navbar-start">
        <a className="w-16 md:w-32 lg:w-48" href="/"><img src={phoenixLogo} className="" alt="logo" /></a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0 text-base-100 xs:text-xs sm:text-sm md:text-md lg:text-lg font-patrick">
          <li><a href="about">About us</a></li>
          <li><a href="documentation">FAQ</a></li>
          <li><a href="contact-us">Contact Us</a></li>
        </ul>
        <button className="h-12 px-6 m-2 text-xl text-base-100 font-patrick duration-150 bg-warning rounded-lg focus:shadow-outline hover:bg-warning">
            Connect Wallet
          </button>
      </div>
    </div>
</header>
  );
}

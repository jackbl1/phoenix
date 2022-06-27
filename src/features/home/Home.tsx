import { useNavigate } from "react-router-dom";
import { Toolbar } from "../toolbar/Toolbar";
import { Footer } from "../footer/Footer";
import discordLogo from "../../assets/DiscordLogo.png";
import instalogo from "../../assets/Instagram_logo.png";
import twittalogo from "../../assets/Twitter_logo.png";
import productGIF from "../../assets/preview.gif";
import shakeIcon from "../../assets/Shake.png";
import toolIcon from "../../assets/Tools.png";
import bicepIcon from "../../assets/bicep.png";
import phoenixLogo from "../../assets/PhoenixLogo.png";

export function Home() {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <div className="">  
      <Toolbar />
      <div className="hero min-h-screen bg-gradient-to-r from-secondary to-warning">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-primary font-patrick">
              Connect with fans,<br></br>
              Build your Brand.
            </h1>
            <p className="mb-5 text-base-100 font-bold text-xl font-patrick">
              Connect your wallet to get started.
            </p>
            <button className="h-12 px-6 m-2 text-xl text-neutral transition-colors duration-150 bg-warning rounded-lg focus:shadow-outline hover:bg-secondary"
            onClick={() => routeChange("create")}
            >
              Performer
            </button>
            <button className="h-12 px-6 m-2 text-xl text-neutral transition-colors duration-150 bg-warning rounded-lg focus:shadow-outline hover:bg-secondary"
              onClick={() => routeChange("mint")}
            >
              Attendee
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

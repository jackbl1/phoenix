import Toolbar from "../toolbar/Toolbar";
import "../about/About.css";
import discordLogo from "../../assets/DiscordLogo.png";
import twittalogo from "../../assets/Twitter_logo.png";
import emailLogo from "../../assets/EmailLogo.png";
import { Footer } from "../footer/Footer";


export function ContactUs() {
  return (
    <div className="bg-gradient-to-r from-warning to-secondary">
    <Toolbar isOpaque={true} />
    
    <div className="flex grid-cols-3 gap-8 w-screen justify-center place-items-top flex-wrap">
      <p className="mb-5 text-5xl font-bold text-primary font-patrick justify-center">
        We would love to hear from you! <br></br>
        <p className="text-center text-sm">(click the cards to link)</p>
      </p>
    </div>

  <div className="flex grid-cols-3 gap-8 w-screen justify-center place-items-top flex-wrap">
  <a href="https://discord.gg/VxmG5VfM" target="_blank" className="card w-96 bg-base-100 shadow-xl m-5">
    <div className="avatar h-48 w-48 m-2 mx-auto">
        <img src={discordLogo} />
    </div>
      <div className="card-body">
        <h2 className="card-title flex flex-wrap">
          Joining our discord!
        </h2>
        <p>
            This is a great place for... <br></br>
              1. Getting connected with the community. <br></br>
              2. Having continued conversation with the Phoenix team. <br></br>
              3. Promoting projects
              </p>
        <h3 className="card-title flex flex-wrap">
          <div className="badge badge-info">Community</div>
          <div className="badge badge-info">Promotion</div>
          <div className="badge badge-info">Continued Conversations</div>
          <div className="badge badge-secondary">No 1-on-1</div>
        </h3>
      </div>
  </a>

  <a href="mailto:troy.nohra@gmail.com" target="_blank" className="card w-96 bg-base-100 shadow-xl m-5">
    <div className="avatar h-48 w-48 m-2 mx-auto">
        <img src={emailLogo} />
    </div>
      <div className="card-body">
        <h2 className="card-title flex flex-wrap">
          Sending us an email!
        </h2>
        <p>
          This is a great place for... <br></br>
            1. Getting quick responses for issues.
        </p>
        <h3 className="card-title flex flex-wrap">
          <div className="badge badge-info">1-on-1</div>
          <div className="badge badge-secondary">Slow back and forth</div>
        </h3>
      </div>
  </a>

  <a href="https://twitter.com/phoenix_studio_" target="_blank" className="card w-96 bg-base-100 shadow-xl align-items-center m-5">
    <div className="avatar h-48 w-48 m-2 mx-auto">
        <img src={twittalogo} />
    </div>
      <div className="card-body">
        <h2 className="card-title flex flex-wrap">
          Messaging or Mentioning us.
        </h2>
        <p>
          This is a great place for... <br></br>
            1. Sending us praise! <br></br>
            2. Promoting a Project! <br></br>
        </p>
        <h3 className="card-title flex flex-wrap">
          <div className="badge badge-info">Promoting</div>
          <div className="badge badge-info">Community</div>
          <div className="badge badge-secondary">Quick Answers</div>
          <div className="badge badge-secondary">Public</div>
        </h3>
      </div>
  </a>


  </div>
  <Footer />
  </div>
  );
}

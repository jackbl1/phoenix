import { Toolbar } from "../toolbar/Toolbar";
import "../about/About.css";
import discordLogo from "../../assets/DiscordLogo.png";
import twittalogo from "../../assets/Twitter_logo.png";
import emailLogo from "../../assets/EmailLogo.png";
import { Footer } from "../footer/Footer";


export function ContactUs() {
  return (
    <div className="bg-gradient-to-r from-warning to-secondary">
    <Toolbar />
    
    <div className="flex grid-cols-3 gap-8 w-screen justify-center place-items-top flex-wrap">
      <p className="mb-5 text-5xl font-bold text-primary font-patrick justify-center">
        We would love to hear from you!
      </p>
    </div>

  <div className="flex grid-cols-3 gap-8 w-screen justify-center place-items-top flex-wrap">
  <div className="card w-96 bg-base-100 shadow-xl align-items-center m-5">
    <div className="avatar">
      <div className="">
        <img src={discordLogo} />
      </div>
    </div>
      <div className="card-body">
        <h2 className="card-title flex flex-wrap">
          Joining our discord!
          <div className="badge badge-info">CTO</div>
          <div className="badge badge-secondary">Co-Founder</div>
        </h2>
        <h3 className="card-title">
        <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jack-bloomfeld-90357b112/"
              className="SocialButton"
            >
              <img src={discordLogo} className="rounded-lg h-12 w-12" alt="" />
        </a>
        </h3>
        <p>

        </p>
        <div className="card-actions justify-end">
        </div>
      </div>
  </div>

  <div className="card w-96 bg-base-100 shadow-xl justfy-center m-5">
    <div className="avatar">
      <div className="">
        <img src={discordLogo} />
      </div>
    </div>
      <div className="card-body">
        <h2 className="card-title flex flex-wrap">
          Sending us an Email
          <div className="badge badge-info">CEO</div>
          <div className="badge badge-secondary">Co-Founder</div>
        </h2>
        <h3 className="card-title">
        <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/troy-nohra-538105114/"
              className="SocialButton"
            >
              <img src={discordLogo} className="rounded-lg h-12 w-12" alt="" />
        </a>
        </h3>
        <p>

        </p>
        <div className="card-actions justify-end">
        </div>
      </div>
  </div>

  <div className="card w-96 bg-base-100 shadow-xl align-items-center m-5">
    <div className="avatar">
      <div className="">
        <img src={discordLogo} />
      </div>
    </div>
      <div className="card-body">
        <h2 className="card-title flex flex-wrap">
          Messaging or Mentioning Us
          <div className="badge badge-info">Partner</div>
          <div className="badge badge-secondary">Industry Expert</div>
        </h2>
        <h3 className="card-title">
        <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://m.imdb.com/name/nm10862870/"
              className="SocialButton"
            >
              <img src={discordLogo} className="rounded-lg h-12 w-12" alt="" />
          </a>
        </h3>
        <p>

        </p>
        <div className="card-actions justify-end">
        </div>
      </div>
  </div>
  </div>
  <Footer />

    <div className="App">
      <div className="App-page">
        <header className="App-header">
          <p className="subtitle-container">
            Reach out to us by...<br></br>
          </p>
          <div className="row-principals">
            <p className="ContactUs">
            <div className="row">
              <p className="FounderTitle">
                Joining our Discord
              </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.gg/VxmG5VfM"
                  className="SocialButton"
                >
                  <img src={discordLogo} className="ReachIcon" alt="" />
                </a>
                </div>
                This is a great place for... <br></br>
                1. Getting connected with the community. <br></br>
                2. Having continued conversation with the Phoenix team. <br></br>
                3. Promoting projects
            </p>
                <p className="ContactUs">
                  <div className="row">
                  <p className="FounderTitle">
                  Sending us an Email
                  </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:troy.nohra@gmail.com"
                  className="SocialButton"
                >
                  <img src={emailLogo} className="ReachIcon" alt="" />
                </a>
                </div>
                This is a great place for... <br></br>
                1. Getting quick responses for issues.
                </p>            
                <p className="ContactUs">
                <div className="row">
                  <p className="FounderTitle">
                    Messaging or Mentioning Us
                  </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/phoenix_studio_"
                  className="SocialButton"
                >
                  <img src={twittalogo} className="ReachIcon" alt="" />
                </a>
                </div>
                This is a great place for... <br></br>
                1. Sending us praise! <br></br>
                2. Promoting a Project! <br></br>
            </p>
          </div>
        </header>
      </div>
    </div>
  </div>
  );
}

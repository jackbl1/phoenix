import { Toolbar } from "../toolbar/Toolbar";
import "./About.css";
import discordLogo from "../../assets/LinkedInLogo.png";
import instalogo from "../../assets/Instagram_logo.png";
import twittalogo from "../../assets/Twitter_logo.png";
import mediumLogo from "../../assets/MediumLogo.png";
import imdb from "../../assets/IMDBlogo.png";
import troyPic from "../../assets/TroyNohra.png";
import jackPic from "../../assets/JackBloomfeld.png";
import jacobPic from "../../assets/JacobMoreno.png";
import phoenixLogo from "../../assets/PhoenixLogo.png";
import { Footer } from "../footer/Footer";

export function About() {
  return (
    <div className="bg-gradient-to-r from-warning to-secondary">
        <Toolbar />
        
        <div className="flex grid-cols-3 gap-8 w-screen justify-center place-items-top flex-wrap">
          <p className="mb-5 text-5xl font-bold text-primary font-patrick justify-center">
            Welcome!<br></br>
            - The Team
          </p>
        </div>

      <div className="flex grid-cols-3 gap-8 w-screen justify-center place-items-top flex-wrap">
      <div className="card w-96 bg-base-100 shadow-xl align-items-center m-5">
        <div className="avatar">
          <div className="">
            <img src={jackPic} />
          </div>
        </div>
          <div className="card-body">
            <h2 className="card-title">
              Jack Bloomfeld
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
            <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@jackbloomfeld1"
                  className="SocialButton"
                >
                  <img src={mediumLogo} className="rounded-lg h-12 w-12" alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/Jub11111"
                  className="SocialButton"
                >
                  <img src={twittalogo} className="rounded-lg h-12 w-12" alt="" />
                </a>
            </h3>
            <p> Jack has experience as a software engineer at Microsoft where he
                worked on building resilient microservice architecture for the
                commerce team that served billions of requests to customers. He
                has spent the past year as a full stack engineer for the
                experimentation (A/B testing) platform. Jack has been an avid web3
                researcher for many years and is active in many web3 communities.
                Check out his Web3 blog from the Medium link above.</p>
            <div className="card-actions justify-end">
            </div>
          </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl justfy-center m-5">
        <div className="avatar">
          <div className="">
            <img src={troyPic} />
          </div>
        </div>
          <div className="card-body">
            <h2 className="card-title">
              Troy Nohra
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
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/troynohra"
                  className="SocialButton"
                >
                  <img src={twittalogo} className="rounded-lg h-12 w-12" alt="" />
                </a>
            </h3>
            <p>Troy has spent the past three years in product at Microsoft where
              he has shipped products from natural language understanding SDK’s
              to AI powered Windows experiences. He has had the opportunity to
              ship features that are used by hundreds of millions of users
              today. <br></br> In the past year Troy has been investing in,
              learning about, and getting involved with the Web3 space and wants
              to work to bring the amazing promises of Web3 to the masses.</p>
            <div className="card-actions justify-end">
            </div>
          </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl align-items-center m-5">
        <div className="avatar">
          <div className="">
            <img src={jacobPic} />
          </div>
        </div>
          <div className="card-body">
            <h2 className="card-title flex flex-wrap">
              Jacob Moreno
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
                  <img src={imdb} className="rounded-lg h-12 w-12" alt="" />
              </a>
            </h3>
            <p>Jacob is a musician that has made several EPs and has performed in
              his own band.<br></br>
              Jacob has 4 years of experience as a professional audio engineer.
              He has worked on Emmy, Grammy, and Oscar winning projects and has
              toured in 4 continents with notable artists. Jacob will be working
              to connect artists to our platforms and support them however
              necessary.</p>
            <div className="card-actions justify-end">
            </div>
          </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

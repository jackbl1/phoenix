import { useNavigate } from "react-router-dom";
import Toolbar from "../toolbar/Toolbar";
import { Footer } from "../footer/Footer";
import { connect } from "react-redux";
import { setWalletConnected } from "../../app/redux";
import { useAppDispatch } from "../../app/hooks";
import "animate.css";
import network from "../../assets/network.png";
import lineArt from "../../assets/HomePage.png";
import musician from "../../assets/199478.png";
import fan from "../../assets/Fan.png";
import wall from "../../assets/Wall.png";
import cage from "../../assets/Cage.png";
import help from "../../assets/GiveTech.png";
import community from "../../assets/community.png";
import tidahome from "../../assets/TidaHomePage.png";

interface IHomeReduxProps {
  walletConnected: string;
}

const mapStateToProps = (state: any) => {
  return {
    walletConnected: state.createFlow.walletConnected,
  };
};

function Home(props: IHomeReduxProps) {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  const dispatch = useAppDispatch();

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      dispatch(setWalletConnected(accounts[0]));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Toolbar isOpaque={false} />

      <div className="hero min-h-screen bg-gradient-to-r from-black to-secondary">
        <div className="hero-overlay bg-opacity-0 ">
          <img className="sm:mt-30 w-10/12 bottom-0 absolute" src={tidahome} />
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            {props.walletConnected === "" && (
              <div>
                <h1 className="mb-5 text-5xl font-bold text-primary font-patrick">
                  Connect with fans,<br></br>
                  Build your Brand.
                </h1>
                <p className="mb-5 text-base-100 font-bold text-xl font-patrick">
                  Helping build verified communities around shared interests.{" "}
                  <br></br> Connect your wallet to get started, or scroll down
                  to learn more.
                </p>
                <button
                  className="h-12 px-6 m-2 text-xl text-neutral transition-colors duration-150 bg-warning rounded-lg focus:shadow-outline hover:bg-secondary"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              </div>
            )}
            {props.walletConnected !== "" && (
              <div>
                <button
                  className="h-12 px-6 m-2 text-xl text-neutral transition-colors duration-150 bg-warning rounded-lg shadow-lg focus:shadow-outline hover:bg-secondary"
                  onClick={() => routeChange("create")}
                >
                  Host
                </button>
                <button
                  className="h-12 px-6 m-2 text-xl text-neutral transition-colors duration-150 bg-warning rounded-lg shadow-lg focus:shadow-outline hover:bg-secondary"
                  onClick={() => routeChange("mint")}
                >
                  Attendee
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-screen min-h-screen bg-gradient-to-r from-warning to-secondary realtive snap-y snap-proximity flex grid-cols-2 w-full p-5 gap-5">
        <h1
          className="text-4xl w-1/4 font-bold text-primary font-patrick text-right absolute"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Other than social media there are very few ways for performers to
          connect with fans,
        </h1>
        <img
          src={musician}
          alt="musician"
          className="h-1/2 absolute mt-72 ml-44"
          data-aos="flip-left"
          data-aos-duration="1000"
        />
        <img
          src={wall}
          alt="wall"
          className="h-3/4 absolute mt-44 ml-44 left-96"
          data-aos="flip-up"
          data-aos-duration="1000"
        />
        <img
          src={fan}
          alt="fan"
          className="h-1/2 absolute mt-72 mr-44 right-0"
          data-aos="flip-left"
          data-aos-duration="1000"
        />
        <h1
          className="text-4xl w-1/4 font-bold text-primary font-patrick text-left right-10 mt-10 absolute"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          build communities, and grow their fan base.
        </h1>
      </div>

      <div className="hero min-h-screen bg-gradient-to-r from-warning to-secondary from-warning relative">
        <img
          src={cage}
          alt="cage"
          className="h-3/4 top-10 absolute"
          data-aos="flip-up"
          data-aos-duration="1000"
        />
        <h1
          className="w-1/2 text-center text-4xl font-bold text-primary font-patrick absolute bottom-10"
          data-aos="fade-up"
          data-aos-duration="5000"
        >
          This has forced performers to sacrifice the quality of their content
          and community to meet the latest trends so their content will be
          pushed to new possible fans.
        </h1>
      </div>
      <div className="hero min-h-screen bg-gradient-to-r from-warning to-secondary relative">
        <h1
          className="w-1/2 text-right text-4xl font-bold text-primary font-patrick absolute right-10"
          data-aos="flip-up"
          data-aos-duration="5000"
        >
          We enable performers with no technical background to build and give
          verified digital art to people who attend their events. (for free!)
        </h1>
        <img
          src={help}
          alt="help"
          className="h-3/4 bottom-10 left-0 absolute"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        />
      </div>

      <div className="hero min-h-screen bg-gradient-to-r from-warning to-secondary relative">
        <h1
          className="w-1/2 text-left text-4xl font-bold text-primary font-patrick absolute left-10"
          data-aos="flip-up"
          data-aos-duration="5000"
        >
          This art lets fans and performers build verified communities on our
          site based on their interests. Here they can connect with other fans,
          performers, get/give exclusive content, and so much more!
        </h1>
        <img
          src={community}
          alt="community"
          className="h-3/4 bottom-10 right-0 absolute"
          data-aos="zoom-in"
          data-aos-duration="1000"
        />
      </div>

      <div className="hero min-h-screen bg-gradient-to-r from-warning to-secondary relative">
        <h1
          className="w-1/4 text-center text-4xl font-bold text-primary font-patrick absolute top-10 right-10"
          data-aos="flip-up"
          data-aos-duration="5000"
        >
          Ultimatley brining more money into performers pockets, and bringing
          fans and performers closer together than ever.
        </h1>
        <img
          src={musician}
          alt="musician"
          className="h-1/2 bottom-10 left-0 absolute"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        />
        <img
          src={fan}
          alt="fan1"
          className="h-1/2 bottom-10 left-15 absolute"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
        <img
          src={fan}
          alt="fan2"
          className="h-1/2 bottom-10 left-15 absolute"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        />
        <img
          src={fan}
          alt="fan3"
          className="h-1/2 bottom-10 left-15 absolute"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        />
      </div>

      <Footer />
    </div>
  );
}

export default connect(mapStateToProps, {})(Home);

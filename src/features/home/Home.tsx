import { useNavigate } from "react-router-dom";
import Toolbar from "../toolbar/Toolbar";
import { Footer } from "../footer/Footer";
import { connect } from "react-redux";
import { setIsWalletConnected } from "../../app/redux";
import { useAppDispatch } from "../../app/hooks";
import { useEffect, useState } from "react";
import 'animate.css';
import network from "../../assets/network.png";


interface IHomeReduxProps {
  isWalletConnected: boolean;
}

interface IToolbarReduxProps {
  isWalletConnected: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    isWalletConnected: state.createFlow.isWalletConnected,
  };
};

function Home(props: IHomeReduxProps) {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  const [currentAccount, setCurrentAccount] = useState("");
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

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      dispatch(setIsWalletConnected(true));
    } catch (error) {
      console.log(error);
    }
  };

  console.log("zzzzzzzzzzzz");
  console.log(props.isWalletConnected);

  return (
    <div>
      <Toolbar isOpaque={false} />

      <div className="hero min-h-screen bg-gradient-to-r from-warning to-secondary">
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            {!props.isWalletConnected && (
              <div>
              <h1 className="mb-5 text-5xl font-bold text-primary font-patrick">
                Connect with fans,<br></br>
                Build your Brand.
              </h1>
              <p className="mb-5 text-base-100 font-bold text-xl font-patrick">
                Connect your wallet to get started, or scroll down to learn more.
              </p>
              <button
                className="h-12 px-6 m-2 text-xl text-neutral transition-colors duration-150 bg-warning rounded-lg focus:shadow-outline hover:bg-secondary"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
              {/* Here I want to create a nice UX that you scroll through that teaches you about why use it as a fan and a performer */}

              </div>
            )}
            {props.isWalletConnected && (
            <div>
              <button
                className="h-12 px-6 m-2 text-xl text-neutral transition-colors duration-150 bg-warning rounded-lg focus:shadow-outline hover:bg-secondary"
                onClick={() => routeChange("create")}
              >
                Performer
              </button>
              <button
                className="h-12 px-6 m-2 text-xl text-neutral transition-colors duration-150 bg-warning rounded-lg focus:shadow-outline hover:bg-secondary"
                onClick={() => routeChange("mint")}
              >
                Attendee
              </button>
            </div>
            )}
          </div>
        </div>
      </div>
      {!props.isWalletConnected && (
          <div className="h-screen min-h-screen bg-secondary realtive snap-y snap-proximity flex grid-cols-2 w-full p-5 gap-5">
              <img src={network} className="m-5 w-1/2 h-1/2" data-aos="fade-right" data-aos-duration="1000"/>
                <h1 className="text-5xl w-1/2 font-bold text-primary font-patrick text-right bottom-0" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
                  Outside of social media there are very few ways for fans and performers to connect and build communities.
                </h1>
          </div>
      )}
      {!props.isWalletConnected && (
          <div className="hero min-h-screen bg-warning">
              <h1 className="mb-5 text-5xl font-bold text-primary font-patrick" data-aos="fade-right" data-aos-duration="5000">
                Suck
              </h1>

          </div>
      )}
      {!props.isWalletConnected && (
          <div className="hero min-h-screen bg-secondary animate__animated animate__fadeInRight">
              <h1 className="mb-5 text-5xl font-bold text-primary font-patrick" data-aos="fade-left" data-aos-duration="5000">
                My
              </h1>

          </div>
      )}
      {!props.isWalletConnected && (
          <div className="hero min-h-screen bg-warning animate__animated animate__fadeInLeft">
              <h1 className="mb-5 text-5xl font-bold text-primary font-patrick" data-aos="fade-right" data-aos-duration="5000">
                Dick
              </h1>

          </div>
      )}
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps, {})(Home);

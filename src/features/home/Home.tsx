import { useNavigate } from "react-router-dom";
import Toolbar from "../toolbar/Toolbar";
import { Footer } from "../footer/Footer";
import { connect } from "react-redux";
import { setIsWalletConnected } from "../../app/redux";
import { useAppDispatch } from "../../app/hooks";
import { useEffect, useState } from "react";

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
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps, {})(Home);

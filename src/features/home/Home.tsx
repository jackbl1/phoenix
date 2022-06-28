import { useNavigate } from "react-router-dom";
import Toolbar from "../toolbar/Toolbar";
import { Footer } from "../footer/Footer";
import { connect } from "react-redux";

interface IHomeReduxProps {
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

  console.log("zzzzzzzzzzzz");
  console.log(props.isWalletConnected);

  return (
    <div>
      <Toolbar isOpaque={true} />

      <div className="hero min-h-screen bg-gradient-to-r from-warning to-secondary">
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-primary font-patrick">
              Connect with fans,<br></br>
              Build your Brand.
            </h1>
            <p className="mb-5 text-base-100 font-bold text-xl font-patrick">
              Connect your wallet to get started.
            </p>
            {props.isWalletConnected && <p>There's a wallet connected</p>}
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps, {})(Home);

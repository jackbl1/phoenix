import phoenixLogo from "../../assets/PhoenixLogo.png";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useAppDispatch } from "../../app/hooks";
import { setIsWalletConnected } from "../../app/redux";
import { connect } from "react-redux";
import messages from "../../assets/comments.png";
import profileIcon from "../../assets/profile.png";
import settings from "../../assets/cogwheel.png";

interface IToolbarBaseProps {
  isOpaque: boolean;
}
interface IToolbarReduxProps {
  isWalletConnected: boolean;
}

interface IToolbarProps
  extends IToolbarBaseProps,
    Partial<IToolbarReduxProps> {}

const mapStateToProps = (state: any) => {
  return {
    isWalletConnected: state.createFlow.isWalletConnected,
  };
};

function Toolbar(props: IToolbarProps) {
  const [currentAccount, setCurrentAccount] = useState("");
  const dispatch = useAppDispatch();

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
        dispatch(setIsWalletConnected(true));
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Implement your connectWallet method here
   */
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

  const divClassName = props.isOpaque
    ? "navbar bg-gradient-to-r from-warning to-secondary"
    : "navbar absolute";

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <header>
      <div className={divClassName}>
        <div className="navbar-start">
          <a className="w-16 md:w-32 lg:w-48" href="/">
            <img src={phoenixLogo} className="" alt="logo" />
          </a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal p-0 text-base-100 xs:text-xs sm:text-sm md:text-md lg:text-lg font-patrick">
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
          {!currentAccount && (
            <button
              onClick={connectWallet}
              className="h-12 px-6 m-2 text-xl text-base-100 font-patrick duration-150 bg-warning rounded-lg focus:shadow-outline hover:bg-warning"
            >
              Connect Wallet
            </button>
          )}
          {currentAccount && (
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1">
              <div className="avatar">
                <div className="w-16 mask mask-squircle">
                  <img src="https://api.lorem.space/image/face?hash=55350" />
                </div>
              </div>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 font-patrick text-lg text-secondary">
              <li><a href="profile">
              <img src={profileIcon} className="h-6 w-6" />
                Profile
              </a></li>
              <li><a href="messages">
              <img src={messages} className="h-6 w-6" />
                Messages
              </a></li>
              <li><a href="">
              <img src={settings} className="h-6 w-6" />
                Settings
              </a></li>
            </ul>
          </div>

          )}
        </div>
      </div>
    </header>
  );
}

export default connect(mapStateToProps, {})(Toolbar);

import { Toolbar } from "../toolbar/Toolbar";
import "./Documentation.css";


export function Documentation() {
  return (
    <div className="App">
      <a className="navBar">
        <Toolbar />
      </a>
      <div className="App-page">
        <header className="App-header">
          <p className="subtitle-container">Documentation & FAQs</p>
          <p className="SubTitle">Click on any topic to learn more.</p>
          <div className="row">
            <div className="FAQContainer">
            <p className="FAQTitle">Which Blockchain do we use?</p>
            <p className="FAQBody">
              Our NFTs will be minted on the Avalanche blockchain.
              <br />
              We are making this decision for many reasons and all are in the best
              interests of both the artist and the users.
              <ol>
                <li>Lower minting costs.</li>
                <li>Faster minting and transaction times.</li>
                <li>Less environmental emissions.</li>
              </ol>
              We will be publishing documentation on the smart contracts and
              protocols used for our NFTs as they are released to the public. Stay
              tuned :)
            </p>
            </div>
            <div className="FAQContainer">
            <p className="FAQTitle">Why use Phoenix?</p>
              <p className="FAQBody">
                TBD
              </p>
            </div>
            <div className="FAQContainer">
            <p className="FAQTitle">What is an NFT?</p>
            <p className="FAQBody">
                TBD
            </p>
            </div>
          </div>
          <div className="row">
            <div className="FAQContainer">
            <p className="FAQTitle">How do we help Artists?</p>
            <p className="FAQBody">
                TBD
            </p>
            </div>
            <div className="FAQContainer">
            <p className="FAQTitle">Whats in it for the fans?</p>
            <p className="FAQBody">
                TBD
            </p>
            </div>
            <div className="FAQContainer">
            <p className="FAQTitle">Terminology you may see!</p>
            <p className="FAQBody">
                TBD
            </p>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

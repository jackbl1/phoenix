import { Toolbar } from "../toolbar/Toolbar";

export function Documentation() {
  return (
    <div className="App">
      <a className="navBar">
        <Toolbar />
      </a>
      <div className="App-page">
        <header className="App-header">
          <p className="subtitle-container">Documentation</p>
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
        </header>
      </div>
    </div>
  );
}

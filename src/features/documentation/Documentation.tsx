import { Toolbar } from "../toolbar/Toolbar";
import "./Documentation.css";

export function Documentation() {
  return (
    <div className="App">
        <Toolbar />
      <div className="App-page">
        <header className="App-header">
          <p className="subtitle-container">Documentation & FAQs</p>
          <p className="SubTitle">Click on any topic to learn more.</p>
          <div className="row-principals">
          <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://unstoppabledomains.com/blog/the-web3-glossary"
              className="FAQContainer"
          >
              <p className="FAQTitle">Terminology you may see!</p>
              <p className="FAQBody">
                <ul>
                  <li>Mint: The creation of an NFT on the blockchain</li><br></br>
                  <li>
                    Attribute: A feature of an NFT which can be visual and/or
                    tied to a real world item.
                  </li><br></br>
                  <li>
                    Blockchain: The underlying technology that allows the global
                    exchange of NFTs
                  </li><br></br>
                  <li>
                    Layer 2: An extension on top of a blockchain that increases
                    efficiency and reduces cost
                  </li><br></br>
                  <li>dApps: An application that is posted to a blockchain</li><br></br>
                  <li>
                    Web3.0: The ecosystem that leverages blockchain technology
                    for decentralized use cases
                  </li>
                </ul>
              </p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://huggingface.co/spaces/dalle-mini/dalle-mini"
              className="FAQContainer"
            >
              <p className="FAQTitle">I am an artist, how do I make the art for NFT's?</p>
              <p className="FAQBody">
                There are all kinds of ways to create digital art like photoshop or hiring graphic designers. 
                We're assuming if you're here looking for this those are not your options. For those performers 
                we recomend you check out DALL-e. It is an AI image generator and while that sounds pretty 
                nerdy, its pretty great.
              </p>
            </a>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.creativebloq.com/features/nft-art-and-the-future-of-nfts"
              className="FAQContainer"
            >
              <p className="FAQTitle">Why use Phoenix?</p>
              <p className="FAQBody">
                If you are an artist looking to build and connect with your fan
                base but dont know the technicals, that doesnt matter! We handle
                all of the it so that you can focus on creating great art.
                <br></br>
                <br></br>
                Phoenix allows artists to publish NFT collections for their
                concerts. Each fan who bought a ticket will be able to mint an
                NFT from the collection with real world benefits. The artist
                will design the art for the NFT and then distribute any benefits
                they decide (like merchandise, early access tickets, meet &
                greets, etc).
                <br />
                <br />
                On top of that, the NFTs can be sold in open marketplaces to
                generate income streams for the artists. Think of these like
                digital collectible ticket stubs.
              </p>
            </a>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-wallet"
              className="FAQContainer"
            >
              <p className="FAQTitle">Whats a wallet and why do I need it?</p>
              <p className="FAQBody">
                Wallets are essentially applications for you to hold all of your web3.0 assets like 
                crypto and NFT's. Since you own these items and not us, you have to connect a wallet 
                to get new NFT's and show us what you've got so we can make your profile. <br></br>
                This means we don't take or save any of your data, unless you've specifically opted into 
                it.
              </p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cdixon.org/2021/02/27/NFTs-and-a-thousand-true-fans"
              className="FAQContainer"
            >
              <p className="FAQTitle">Why use NFTs?</p>
              <p className="FAQBody">
                NFT's allow artists to add a new type of art to their arsenal!
                On top of that NFT's can... <br></br>
                1. Gain value overtime, giving fans a reason to find young and
                growing artists (other than liking thier music).
                <br></br>
                2. Give artists 'royalties' back, by configuring lasting
                ownership to the creator. That means if you kept 10% ownership
                of your NFT and the new owner sells it for $100, you'd get $10
                of that!
                <br></br>
                3. Artists can drop exclusive new music, information, and more
                as NFT ownership acts as a 'buy in' for a club (fans of the
                artist)!
              </p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://gabygoldberg.notion.site/web3-starter-pack-8f953b437c6b4faa9f94af11bfc94193"
              className="FAQContainer"
            >
              <p className="FAQTitle">What the heck is Web3.0?</p>
              <p className="FAQBody">
                Web3.0 describes the ecosystem leveraging blockchain technology
                for decentralized use cases. The magic of web3.0 is cutting out
                the middlemen and increasing profits for the creators of the
                world. This can be done by giving ownership directly to the
                creators and distributing content on a blockchain without the
                use of a middleman. Let's take ticketing for example. When an
                artist sells tickets to an event, the ticketing platform (like
                Ticketmaster) would take a large chunk of the profits. Web3
                technology allows artists to sell tickets directly to the fans
                in a trustworthy and decentralized way, directing all of the
                profits to the artist where they belong.
              </p>
            </a>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.creativebloq.com/features/nft-art-and-the-future-of-nfts"
              className="FAQContainer"
            >
              <p className="FAQTitle">Whats in it for the fans?</p>
              <p className="FAQBody">
                The fans can mint NFTs for <i>free</i> on our platform and
                receive real benefits. After attending a concert the fan's free
                NFT can be used to connect with the artist, receive perks like
                early access to future tickets or free merch, and even trade the
                NFTs for cash on an open marketplace.
              </p>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@immutablex/introducing-imx-to-power-ethereums-first-layer-2-for-nfts-8be74981f573"
              className="FAQContainer"
            >
              <p className="FAQTitle">Which Blockchain do we use?</p>
              <p className="FAQBody">
                Our NFTs will be minted on the Ethereum blockchain via a 'Layer
                2' called Immutable x.
                <br />
                We are making this decision for many reasons and all are in the
                best interests of both the artist and the users.<br></br>
                <br></br>1. No minting costs.
                <br></br>2. Faster minting and transaction times.
                <br></br>3. Less environmental emissions.<br></br><br></br>
                We will be publishing documentation on the smart contracts and
                protocols used for our NFTs as they are released to the public.
                Stay tuned :)
              </p>
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}

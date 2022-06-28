import { useState } from "react";
import Toolbar from "../toolbar/Toolbar";
import "../artist-flow/Artist.css";
import { QrReader } from "react-qr-reader";
import phoenixLogo from "../../assets/PhoenixLogo.png";

export function MintFlow() {
  const [scan, setScan] = useState(false);
  const [data, setData] = useState("No result");

  return (
    <div>
      <Toolbar isOpaque={false} />
      <div className="hero min-h-screen bg-gradient-to-r from-primary to-secondary">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-primary font-patrick">
              Reedeem your NFT
            </h1>
            <p className="mb-5 text-primary text-xl font-patrick">
              Press the button to scan your ticket's QR code to redeem your
              Phoenix NFT!
            </p>
            {!scan && (
              <button
                className="h-12 px-6 m-2 text-xl text-neutral transition-colors duration-150 bg-warning rounded-lg focus:shadow-outline hover:bg-secondary"
                onClick={() => setScan(true)}
              >
                Redeem NFT
              </button>
            )}
            {scan && (
              <>
                <QrReader
                  onResult={(result: any, error: any) => {
                    if (!!result) {
                      setData(result?.text);
                    }

                    if (!!error) {
                      console.info(error);
                    }
                  }}
                  constraints={{ facingMode: "user" }}
                />
                <p>{data}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Toolbar } from "../toolbar/Toolbar";
import "../artist-flow/Artist.css";
import { QrReader } from "react-qr-reader";

export function MintFlow() {
  const [scan, setScan] = useState(false);
  const [data, setData] = useState("No result");

  return (
    <div className="App">
      <a className="navBar">
        <Toolbar />
      </a>
      <div className="Artist-page">
        <p className="artist-header">Redeem your Phoenix</p>
        <p className="artist-subheader">
          Simply upload your ticket below or scan your ticket's QR code to
          redeem your Phoenix NFT!
        </p>
        {!scan && (
          <button className={"unselected-button"} onClick={() => setScan(true)}>
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
  );
}

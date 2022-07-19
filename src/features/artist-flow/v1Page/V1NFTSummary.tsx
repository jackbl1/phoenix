interface IV1NFTSummaryProps {
  nftTitle: string;
  nftGroup: string;
  nftImageFile: any;
  nftImagePreview: any;
  numNFTs: number;
  ownershipPercent: number;
}

function V1NFTSummary(props: IV1NFTSummaryProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body text-left">
        <h2 className="card-title font-xl font-patrick text-secondary">
          NFT Summary
        </h2>
        <div className="grid grid-rows-1 m-2">
          <div className="grid grid-cols-4">
            <div className="cols-span-1">
              <p className="font-sm font-patrick text-secondary">Title: </p>
              <p className="font-xl font-patrick text-neutral">
                {props.nftTitle}
              </p>
            </div>
            <div className="cols-span-1">
              <p className="font-sm font-patrick text-secondary">Grouping: </p>
              <p className="font-xl font-patrick text-neutral">
                {props.nftGroup}
              </p>
            </div>
            <div className="cols-span-1">
              <p className="font-sm font-patrick text-secondary">How many: </p>
              <p className="font-xl font-patrick text-neutral">
                {props.numNFTs}
              </p>
            </div>
            <div className="cols-span-1">
              <p className="font-sm font-patrick text-secondary">Ownership: </p>
              <p className="font-xl font-patrick text-neutral">
                {props.ownershipPercent}
              </p>
            </div>
            <div>
              <div className="card-actions m-2">
                <label title={props.nftTitle}>
                  <div>
                    <img
                      className="preview"
                      src={props.nftImagePreview}
                      alt=""
                    />
                  </div>
                  <p className="btn btn-primary m-3">Select File</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default V1NFTSummary;

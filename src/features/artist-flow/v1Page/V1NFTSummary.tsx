import ImageUpload from "../../../components/ImageUpload";

interface IV1NFTSummaryProps {
  nftTitle: string;
  nftGroup: string;
  nftImageFile: any;
  nftImagePreview: any;
}

function V1NFTSummary(props: IV1NFTSummaryProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body text-left">
        <h2 className="card-title font-xl font-patrick text-secondary">
          NFT Summary
        </h2>
        <div className="">
          <p className="font-xl font-patrick text-neutral">{props.nftTitle}</p>
          <div>
            <div className="card-actions">
              <label title={props.nftTitle}>
                <p className="btn btn-primary m-3">Select File</p>
                <div>
                  <img className="preview" src={props.nftImagePreview} alt="" />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default V1NFTSummary;

import ImageUpload from "../../../components/ImageUpload";

interface ILotteryAttributeSummaryProps {
  attributeConst: string;
  attributeLabel: string;
  attributeVal: string;
}

function LotteryAttributeSummary(props: ILotteryAttributeSummaryProps) {
  return (
    <div className="row">
      <div className="col">
        <p className="Summary-Header-title">Lottery Attribute</p>
        <div className="Summary-Data-attribute-lottery">
          <div className="col">
            <p className="Summary-Image-title">For 10% of...</p>
            <p className="Summary-Main-attribute">
              <p className="distributionTitle">{props.attributeLabel}</p>
              {props.attributeVal}
            </p>
            <p className="Summary-Image-title">Image:</p>
            <ImageUpload attributeId={props.attributeConst} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LotteryAttributeSummary;

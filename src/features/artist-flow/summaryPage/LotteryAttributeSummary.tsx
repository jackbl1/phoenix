import ImageUpload from "../../../components/ImageUpload";

interface ILotteryAttributeSummaryProps {
  attributeConst: string;
  attributeLabel: string;
  attributeVal: string;
  isLottery: boolean;
}

function LotteryAttributeSummary(props: ILotteryAttributeSummaryProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body text-left">
        <h2 className="card-title font-xl font-patrick text-secondary">
        Lottery Attribute
        </h2>
        <div className="">
        <p className="font-xl font-patrick text-neutral">
              For ___% of fans with a {props.attributeLabel} of {props.attributeVal}
              </p>
            <div>
              <ImageUpload attributeId={props.attributeConst} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default LotteryAttributeSummary;

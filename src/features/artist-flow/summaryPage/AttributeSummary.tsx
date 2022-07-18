import ImageUpload from "../../../components/ImageUpload";

interface IAttributeSummaryProps {
  attributeConst: string;
  attributeLabel: string;
  attributeVal: string;
  isLottery: boolean;
}

function AttributeSummary(props: IAttributeSummaryProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body text-left">
        <h2 className="card-title font-xl font-patrick text-secondary">
        Real World Linked Attribute
        </h2>
        <div className="">
        <p className="font-xl font-patrick text-neutral">
                {props.attributeVal}
              </p>
            <div>
              <ImageUpload attributeId={props.attributeConst} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default AttributeSummary;

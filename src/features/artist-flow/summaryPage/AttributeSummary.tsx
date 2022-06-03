import ImageUpload from "../../../components/ImageUpload";

interface IAttributeSummaryProps {
  attributeConst: string;
  attributeLabel: string;
  attributeVal: string;
}

function AttributeSummary(props: IAttributeSummaryProps) {
  return (
    <div className="row">
      <div className="col">
        <p className="Summary-Header-title">Real World Linked Attribute</p>
        <div className="Summary-Data-attribute">
          <div className="col">
            <p className="Summary-Image-title">For all...</p>
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

export default AttributeSummary;

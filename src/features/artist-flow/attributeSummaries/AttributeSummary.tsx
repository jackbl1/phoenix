import AttributeImageUpload from "../../../common/AttributeImageUpload";

interface IAttributeSummaryProps {
  attributeConst: string;
  attributeLabel: string;
  attributeVal: string;
  attributesArray: any;
}

function AttributeSummary(props: IAttributeSummaryProps) {
  return (
    <div className="row">
      <div className="col">
        <p className="Summary-Header-title">Attribute</p>
        <div className="Summary-Data-attribute">
          <div className="col">
            <p className="Summary-Image-title">For all...</p>
            <p className="Summary-Main-attribute">
              <p className="distributionTitle">{props.attributeLabel}</p>
              {props.attributeVal}
            </p>
            <p className="Summary-Image-title">Image:</p>
            <AttributeImageUpload
              attribute={props.attributesArray.cityAttribute}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttributeSummary;

import { AttributesList } from "../../common/constants";
import { DISTRIBUTION_PER_TEXT } from "../../common/constantsText";
import { IFormData } from "../../common/interfaces";

interface IDistributedPerProps {
  guide: boolean;
  formData: IFormData;
  setCurrentAttribute: any;
}

function DistributedPer(props: IDistributedPerProps) {
  const attributesButtons = AttributesList.map(function (attribute) {
    return (
      <>
        <input
          type="radio"
          name="buttonGroup"
          value={attribute}
          id={attribute}
          onChange={() => {
            props.setCurrentAttribute(attribute);
          }}
        />
        <label className="radio-label" htmlFor={attribute}>
          {attribute}
        </label>
      </>
    );
  });
  return (
    <div className="row">
      <div className="dark-container">
        <p className="container-title">Distributed per..</p>
        <div>{attributesButtons}</div>
      </div>
      {props.guide && (
        <div className="">
          <p className="artist-subheader">What is the 'Distribution Per'?</p>
          <p className="descriptionParagraph">{DISTRIBUTION_PER_TEXT}</p>
        </div>
      )}
    </div>
  );
}

export default DistributedPer;

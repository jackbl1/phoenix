import { DISTRIBUTION_PER_TEXT } from "../../common/constants";
import { AttributesList, IFormData } from "../../common/interfaces";

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
      <div className="dark-container">{attributesButtons}</div>
      {props.guide && (
        <div>
          <p className="artist-subheader">What is the 'Distribution Per'?</p>
          <p className="descriptionParagraph">{DISTRIBUTION_PER_TEXT}</p>
        </div>
      )}
    </div>
  );
}

export default DistributedPer;

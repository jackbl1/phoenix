import { AttributesList } from "../../../common/constants";
import { REAL_WORLD_LINK_TEXT } from "../../../common/constantsText";
import { IFormData } from "../../../common/interfaces";

interface IRealWorldLinkBaseProps {
  guide: boolean;
  setCurrentAttribute: any;
  formData: IFormData;
  completedAttributes: string[];
}

interface IRealWorldLinkReduxProps {
  attributesList: any;
}

interface IRealWorldLinkProps
  extends IRealWorldLinkBaseProps,
    Partial<IRealWorldLinkReduxProps> {}

function RealWorldLink(props: IRealWorldLinkProps) {
  const attributesButtons = AttributesList.map(function (attribute) {
    const attributeComplete = props.completedAttributes.includes(attribute);
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
          disabled={attributeComplete}
        />
        <label
          className={attributeComplete ? "radio-label-disabled" : "radio-label"}
          htmlFor={attribute}
        >
          {attribute}
        </label>
      </>
    );
  });

  return (
    <div className="row">
      <div className="dark-container">
        <p className="container-title">Real World Link</p>
        <div className="real-links-list">{attributesButtons}</div>
      </div>
      {props.guide && (
        <div className="">
          <p className="artist-subheader">What is the real world link?</p>
          <p className="descriptionParagraph">{REAL_WORLD_LINK_TEXT}</p>
        </div>
      )}
    </div>
  );
}

export default RealWorldLink;

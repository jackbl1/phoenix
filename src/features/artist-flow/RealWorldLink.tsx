import { useAppDispatch } from "../../app/hooks";
import { completeAttribute } from "../../app/redux";
import { AttributesList } from "../../common/constants";
import { REAL_WORLD_LINK_TEXT } from "../../common/constantsText";
import { IFormData } from "../../common/interfaces";

interface IRealWorldLinkProps {
  guide: boolean;
  setCurrentAttribute: any;
  formData: IFormData;
}

function RealWorldLink(props: IRealWorldLinkProps) {
  const dispatch = useAppDispatch();
  const attributesButtons = AttributesList.map(function (attribute) {
    return (
      <>
        <input
          type="radio"
          name="buttonGroup"
          value={attribute}
          id={attribute}
          onChange={() => {
            dispatch(completeAttribute(attribute));
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

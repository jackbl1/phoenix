import { useState } from "react";
import { REAL_WORLD_LINK_TEXT } from "../../common/constants";
import { ATTRIBUTES, AttributesList, IFormData } from "../../common/interfaces";
import { checkFormEntries } from "../../common/utilities";

interface IRealWorldLinkProps {
  guide: boolean;
  setCurrentAttribute: any;
  formData: IFormData;
}

function RealWorldLink(props: IRealWorldLinkProps) {
  //const attributesList = checkFormEntries(props.formData);
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
        Real World Link
        {attributesButtons}
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

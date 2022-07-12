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
        />
        <label
          className={attributeComplete ? "btn btn-outline btn-warning m-2" : "btn btn-outline btn-warning m-2"}
          htmlFor={attribute}
        >
          {attribute}
        </label>
      </>
    );
  });

  return (
    <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
    <figure className="px-10 pt-10">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text font-patrick text-lg font-primary">
            Real World Link
          </span>
        </label>
        <div>{attributesButtons}</div>
      </div>
    </figure>
    <div className="card-body items-center text-center">
    {props.guide && (
            <div className="">
              <p className="artist-subheader">What is this?</p>
              <p className="descriptionParagraph">{REAL_WORLD_LINK_TEXT}</p>
            </div>
          )}
    </div>
  </div>
  );
}

export default RealWorldLink;

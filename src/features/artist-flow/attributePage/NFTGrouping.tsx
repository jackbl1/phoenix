import { AttributesList } from "../../../common/constants";
import { NFT_GROUP } from "../../../common/constantsText";
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
          type="text"
          placeholder="All, VIP, San Fran, etc."
          className="input input-bordered input-warning w-full max-w-xs p-5"
          id={attribute}
          onInput={() => {
            props.setCurrentAttribute(attribute);
          }}
        />
      </>
    );
  });

  return (
    <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
    <figure className="px-10 pt-10">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text font-patrick text-lg font-primary">
            Grouping 
            </span>
        </label>
        <div>{attributesButtons}</div>
      </div>
    </figure>
    <div className="card-body items-center text-center">
    {props.guide && (
        <div className="">
            <p className="artist-subheader">What is a group?</p>
            <p className="descriptionParagraph">{NFT_GROUP}</p>
        </div>
        )}
    </div>
  </div>
  );
}

export default RealWorldLink;

import { useAppDispatch } from "../../../app/hooks";
import { setAttributeData } from "../../../app/redux";
import { ATTRIBUTES } from "../../../common/constants";
import { IFormData } from "../../../common/interfaces";

interface IDistributionTableProps {
  formData: IFormData;
  currentAttribute: string;
}

function DistributionTable(props: IDistributionTableProps) {
  const dispatch = useAppDispatch();
  const attributeLabelComponent = () => {
    if (props.currentAttribute === ATTRIBUTES.CITY) {
      return (
        <>
          <div className="col">
            <p>For</p>
            <input
              className="input-style-short-disabled"
              value={props.formData.city}
              onClick={(e) => {
                dispatch(
                  setAttributeData({
                    attributeId: ATTRIBUTES.CITY,
                    data: props.formData.city,
                  })
                );
              }}
              disabled
            />
          </div>
          <div className="col">
            <p>% receiving</p>
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
          </div>
        </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.EVENT_DATE) {
      return (
        <>
          <div className="col">
            <p>For</p>
            <input
              className="input-style-short-disabled"
              value={props.formData.date.toDateString()}
              onClick={(e) => {
                dispatch(
                  setAttributeData({
                    attributeId: ATTRIBUTES.EVENT_DATE,
                    data: props.formData.date.toDateString(),
                  })
                );
              }}
              disabled
            />
          </div>
          <div className="col">
            <p>% receiving</p>
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
          </div>
        </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.OPENER) {
      return (
        <>
          <div className="col">
            <p>For</p>
            <input
              className="input-style-short-disabled"
              value={props.formData.opener}
              onClick={(e) => {
                dispatch(
                  setAttributeData({
                    attributeId: ATTRIBUTES.OPENER,
                    data: props.formData.opener,
                  })
                );
              }}
              disabled
            />
          </div>
          <div className="col">
            <p>% receiving</p>
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
          </div>
        </>
      );
      // } else if (props.currentAttribute === ATTRIBUTES.SEATING_LEVEL) {
      //   return (
      //     <>
      //       <div className="col">
      //         <p>For</p>
      //         <input
      //           className="input-style-short-disabled"
      //           value="VIP"
      //           disabled
      //         />
      //         <input className="input-style-short-disabled" value="GA" disabled />
      //         <input
      //           className="input-style-short-disabled"
      //           value="Deluxe"
      //           disabled
      //         />
      //         <input
      //           className="input-style-short-disabled"
      //           value="Lawn"
      //           disabled
      //         />
      //       </div>
      //       <div className="col">
      //         <p>% receiving</p>
      //         <input
      //           className="input-style-short"
      //           type="text"
      //           placeholder="Ex. 10%"
      //         />
      //         <input
      //           className="input-style-short"
      //           type="text"
      //           placeholder="Ex. 10%"
      //         />
      //         <input
      //           className="input-style-short"
      //           type="text"
      //           placeholder="Ex. 10%"
      //         />
      //         <input
      //           className="input-style-short"
      //           type="text"
      //           placeholder="Ex. 10%"
      //         />
      //       </div>
      //     </>
      //   );
    } else if (props.currentAttribute === ATTRIBUTES.STATE) {
      return (
        <>
          <div className="col">
            <p>For</p>
            <input
              className="input-style-short-disabled"
              value={props.formData.state}
              onClick={(e) => {
                dispatch(
                  setAttributeData({
                    attributeId: ATTRIBUTES.STATE,
                    data: props.formData.state,
                  })
                );
              }}
              disabled
            />
          </div>
          <div className="col">
            <p>% receiving</p>
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
          </div>
        </>
      );
    } else if (props.currentAttribute === ATTRIBUTES.VENUE) {
      return (
        <>
          <div className="col">
            <p>For</p>
            <input
              className="input-style-short-disabled"
              value={props.formData.venue}
              onClick={(e) => {
                dispatch(
                  setAttributeData({
                    attributeId: ATTRIBUTES.VENUE,
                    data: props.formData.venue,
                  })
                );
              }}
              disabled
            />
          </div>
          <div className="col">
            <p>% receiving</p>
            <input
              className="input-style-short"
              type="text"
              placeholder="Ex. 10%"
            />
          </div>
        </>
      );
    } else {
      return <p>Please select an attribute to define</p>;
    }
  };
  return (
    <div className="dark-container-wide">
      <p className="container-title">Distribution</p>
      <div className="row">{attributeLabelComponent()}</div>
    </div>
  );
}

export default DistributionTable;

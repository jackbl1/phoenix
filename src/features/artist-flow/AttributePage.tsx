import {
  ATTRIBUTE_TEXT,
  ATTRIBUTE_CATEGORY_TEXT,
  DEFINE_ATTRIBUTE_TEXT,
  ATTRIBUTE_FILE_TEXT,
  WHAT_ATTRIBUTE_TEXT,
} from "../../common/constants";
import exampleImage from "../../assets/NFT-example.png";
import "./Artist.css";
import RealWorldLink from "./RealWorldLink";
import AttributeImageUpload from "../../common/AttributeImageUpload";
import { useState } from "react";
import {
  ATTRIBUTES,
  AttributesList,
  IAttributeData,
  IFormData,
} from "../../common/interfaces";
import CityAttribute from "./attributeSelectors/CityAttribute";
import EventDateAttribute from "./attributeSelectors/EventDateAttribute";
import OpenerAttribute from "./attributeSelectors/OpenerAttribute";
import StateAttribute from "./attributeSelectors/StateAttribute";
import VenueAttribute from "./attributeSelectors/VenueAttribute";
import AttributeSummary from "./attributeSummaries/AttributeSummary";

interface IAttributePageProps {
  guide: boolean;
  guideHandler: (input: boolean) => void;
  formData: IFormData;
  attributes: IAttributeData;
  setAttributes: (input: any) => void;
}

function AttributePage(props: IAttributePageProps) {
  const [currentAttribute, setCurrentAttribute] = useState("");
  const definedAttributes = () => {
    props.attributes.cityAttribute.data ? (
      <AttributeSummary
        attributeConst={ATTRIBUTES.CITY}
        attributeLabel="City"
        attributeVal={props.formData.city}
        attributesArray={props.attributes}
        setAttributes={props.setAttributes}
      />
    ) : (
      <></>
    );
  };
  const attributeComponent = () => {
    if (currentAttribute === ATTRIBUTES.CITY) {
      return <CityAttribute city={props.formData.city} />;
    } else if (currentAttribute === ATTRIBUTES.EVENT_DATE) {
      return (
        <EventDateAttribute eventDate={props.formData.date.toDateString()} />
      );
    } else if (currentAttribute === ATTRIBUTES.OPENER) {
      return <OpenerAttribute opener={props.formData.opener} />;
      // } else if (currentAttribute === ATTRIBUTES.SEATING_LEVEL) {
      //   return <SeatingLevelAttribute />;
    } else if (currentAttribute === ATTRIBUTES.STATE) {
      return <StateAttribute state={props.formData.state} />;
    } else if (currentAttribute === ATTRIBUTES.VENUE) {
      return <VenueAttribute venue={props.formData.venue} />;
    } else {
      return (
        <div className="dark-container">
          Attribute <br />
          <div className="col">
            Please select a link to define the attribute
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="artist-flow">
        <div className="toggle-row">
          <button
            className={props.guide ? "selected-button" : "unselected-button"}
            onClick={() => props.guideHandler(true)}
          >
            Descriptive text please!
          </button>
          <button
            className={props.guide ? "unselected-button" : "selected-button"}
            onClick={() => props.guideHandler(false)}
          >
            I got this, thanks
          </button>
        </div>
        {props.guide ? (
          <>
            <div className="row">
              <div>
                <p className="artist-subheader">What is an Attribute? </p>
                <p className="descriptionParagraph">{ATTRIBUTE_TEXT}</p>
              </div>
            </div>
            <div className="row">
              Example:
              <img src={exampleImage} alt={"Example NFT"} />
            </div>
            <div className="row">
              <div className="dark-container">
                Attribute Category
                <div className="CategoryChoser">
                  <input
                    className="input-style-short"
                    placeholder="Ex. glasses, background"
                  />
                </div>
              </div>
              <div>
                <p className="artist-subheader">
                  What is an attribute category?
                </p>
                <p className="descriptionParagraph">
                  {ATTRIBUTE_CATEGORY_TEXT}
                </p>
              </div>
            </div>
            <RealWorldLink
              guide={props.guide}
              setCurrentAttribute={setCurrentAttribute}
              formData={props.formData}
            />
          </>
        ) : (
          <div className="row">
            <div className="dark-container">
              Attribute Category
              <input
                className="input-style-short"
                placeholder="Ex. glasses, background"
              />
            </div>
            <RealWorldLink
              guide={props.guide}
              setCurrentAttribute={setCurrentAttribute}
              formData={props.formData}
            />
          </div>
        )}
        {props.guide ? (
          <>
            <p className="artist-subheader">
              Now to define the attributes in this category.
            </p>
            <p className="descriptionParagraph">{DEFINE_ATTRIBUTE_TEXT}</p>
            <div className="row">
              <div className="dark-container">
                Attribute File
                <AttributeImageUpload
                  currentAttribute={currentAttribute}
                  attributes={props.attributes}
                  setAttributes={props.setAttributes}
                />
              </div>
              <div>
                <p className="artist-subheader">What is an attribute file?</p>
                <p className="descriptionParagraph">{ATTRIBUTE_FILE_TEXT}</p>
              </div>
            </div>
            <div className="row">
              {attributeComponent()}
              <div>
                <p className="artist-subheader">What is the attribute?</p>
                <p className="descriptionParagraph">{WHAT_ATTRIBUTE_TEXT}</p>
              </div>
            </div>
            <button className="addAnotherButton">+ add another?</button>
          </>
        ) : (
          <>
            <div className="row">
              <div className="dark-container">
                Attribute File
                <AttributeImageUpload
                  currentAttribute={currentAttribute}
                  attributes={props.attributes}
                  setAttributes={props.setAttributes}
                />
              </div>
              {attributeComponent()}
            </div>
            <button className="addAnotherButton">+ add another?</button>
          </>
        )}
      </div>
    </>
  );
}

export default AttributePage;

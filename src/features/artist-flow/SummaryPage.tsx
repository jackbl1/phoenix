import { useState } from "react";
import BaseImageUpload from "../../common/BaseImageUpload";
import { ATTRIBUTES, IFormData } from "../../common/interfaces";
import "./Artist.css";
import AttributeSummary from "./attributeSummaries/AttributeSummary";

interface ISummaryPageProps {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
  baseImageFile: any;
  setBaseImageFile: (input: any) => void;
  baseImagePreview: any;
  setBaseImagePreview: (input: any) => void;
  attributes: any;
  setAttributes: (input: any) => void;
}

function SummaryPage(props: ISummaryPageProps) {
  const [editArtist, setEditArtist] = useState(false);
  const [editEvent, setEditEvent] = useState(false);
  const [editOpener, setEditOpener] = useState(false);
  const [editVenueDetails, setEditVenueDetails] = useState(false);

  var attributeDisplays = [];
  if (!!props.attributes.cityAttribute.imagePreview) {
    console.log(props.attributes.cityAttribute);
    attributeDisplays.push(
      <AttributeSummary
        attributeConst={ATTRIBUTES.CITY}
        attributeLabel="City"
        attributeVal={props.formData.city}
        attributesArray={props.attributes}
      />
    );
  }
  if (!!props.attributes.stateAttribute.imagePreview) {
    attributeDisplays.push(
      <AttributeSummary
        attributeConst={ATTRIBUTES.STATE}
        attributeLabel="State"
        attributeVal={props.formData.state}
        attributesArray={props.attributes}
      />
    );
  }
  if (!!props.attributes.venueAttribute.imagePreview) {
    attributeDisplays.push(
      <AttributeSummary
        attributeConst={ATTRIBUTES.VENUE}
        attributeLabel="Venue"
        attributeVal={props.formData.venue}
        attributesArray={props.attributes}
      />
    );
  }
  if (!!props.attributes.dateAttribute.imagePreview) {
    attributeDisplays.push(
      <AttributeSummary
        attributeConst={ATTRIBUTES.EVENT_DATE}
        attributeLabel="Event Date"
        attributeVal={props.formData.date.toDateString()}
        attributesArray={props.attributes}
      />
    );
  }

  return (
    <>
      <p className="Summary-Header">Who and What?</p>
      <div className="row">
        <div className="Summary-container">
          <div className="Summary-Header-title">Event Name</div>
          <div
            className="Summary-Data"
            onClick={() => {
              if (!editEvent) {
                setEditEvent(true);
                setEditOpener(false);
                setEditArtist(false);
                setEditVenueDetails(false);
              }
            }}
          >
            {!editEvent && (
              <p className="Summary-Main">{props.formData.event}</p>
            )}
            {editEvent && (
              <p>
                <button
                  className="EditButton"
                  onKeyPress={(e) => e.key === "Enter" && setEditEvent(false)}
                >
                  <input
                    className="edit-summary"
                    type="text"
                    placeholder="Edit event"
                    value={props.formData.event}
                    onChange={(e) => {
                      props.setFormData({
                        ...props.formData,
                        event: e.target.value,
                      });
                    }}
                    required
                  />
                </button>
                <p className="small-text">Press Enter to save.</p>
              </p>
            )}
            {!editEvent && <p className="small-text">click to edit</p>}
          </div>
        </div>
        <div className="Summary-container">
          {editArtist && (
            <div>
              <input
                className="edit-summary"
                type="text"
                placeholder="Edit artist name"
                value={props.formData.artist}
                onChange={(e) => {
                  props.setFormData({
                    ...props.formData,
                    artist: e.target.value,
                  });
                }}
                required
              />
              <button onClick={() => setEditArtist(false)}>x</button>
            </div>
          )}
          <div className="Summary-Header-title">Host Name</div>
          <div
            className="Summary-Data"
            onClick={() => {
              if (!editArtist) {
                setEditArtist(true);
                setEditOpener(false);
                setEditEvent(false);
                setEditVenueDetails(false);
              }
            }}
          >
            <p className="Summary-Main">{props.formData.artist}</p>
            <p className="small-text">click to edit</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="Summary-container">
          {editOpener && (
            <div>
              <input
                className="input-style"
                type="text"
                placeholder="Edit opener name"
                value={props.formData.opener}
                onChange={(e) => {
                  props.setFormData({
                    ...props.formData,
                    opener: e.target.value,
                  });
                }}
                required
              />
              <button onClick={() => setEditOpener(false)}>x</button>
            </div>
          )}
          <div className="Summary-Header-title">Opener Name</div>
          <div
            className="Summary-Data"
            onClick={() => {
              console.log("opener container clicked");
              if (!editOpener) {
                setEditOpener(true);
                setEditArtist(false);
                setEditEvent(false);
                setEditVenueDetails(false);
              }
            }}
          >
            <p className="Summary-Main">
              {props.formData.opener ? props.formData.opener : "No opener"}
            </p>
            <p className="small-text">click to edit</p>
          </div>
        </div>
      </div>
      <p className="Summary-Header">When and Where?</p>
      <div className="row">
        <div
          className="Summary-container"
          onClick={() => {
            if (!editVenueDetails) {
              setEditVenueDetails(true);
              setEditOpener(false);
              setEditArtist(false);
              setEditEvent(false);
            }
          }}
        >
          {editVenueDetails && (
            <div>
              Edit Venue
              <input
                className="edit-summary"
                type="text"
                placeholder="Edit venue"
                value={props.formData.venue}
                onChange={(e) => {
                  props.setFormData({
                    ...props.formData,
                    venue: e.target.value,
                  });
                }}
              />
              Edit city
              <input
                className="edit-summary"
                type="text"
                placeholder="Edit city"
                value={props.formData.city}
                onChange={(e) => {
                  props.setFormData({
                    ...props.formData,
                    city: e.target.value,
                  });
                }}
              />
              Edit state
              <input
                className="edit"
                type="text"
                placeholder="Edit state"
                value={props.formData.state}
                onChange={(e) => {
                  props.setFormData({
                    ...props.formData,
                    state: e.target.value,
                  });
                }}
              />
              <button onClick={() => setEditVenueDetails(false)}>x</button>
            </div>
          )}
          <div className="summary-row">
            <div className="col">
              <div className="Summary-Header-title">Venue</div>
              <div className="Summary-Data">
                <p className="Summary-Main">
                  {props.formData.venue} <br></br>
                </p>
                <p className="small-text">click to edit</p>
              </div>
            </div>
            <div className="col">
              <div className="Summary-Header-title">Date</div>
              <div className="Summary-Data">
                <p className="Summary-Main">
                  {props.formData.date.toDateString()}
                  <br></br>
                </p>
                <p className="small-text">click to edit</p>
              </div>
            </div>
            <div className="col">
              <div className="Summary-Header-title">Location</div>
              <div className="Summary-Data">
                <p className="Summary-Main">
                  {props.formData.city}
                  {", "}
                  {props.formData.state}
                </p>
                <p className="small-text">click to edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="Summary-Header">NFT Attributes</p>
      <div className="row">
        <div className="Summary-Header-title">
          Base File for the NFT
          <div className="Summary-Data">
            <BaseImageUpload
              baseImageFile={props.baseImageFile}
              setBaseImageFile={props.setBaseImageFile}
              baseImagePreview={props.baseImagePreview}
              setBaseImagePreview={props.setBaseImagePreview}
            />
          </div>
        </div>
      </div>
      {attributeDisplays}
    </>
  );
}

export default SummaryPage;

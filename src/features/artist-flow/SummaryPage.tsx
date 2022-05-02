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
    attributeDisplays.push(
      <AttributeSummary
        attributeConst={ATTRIBUTES.CITY}
        attributeLabel="City"
        attributeVal={props.formData.city}
        attributesArray={props.attributes}
        setAttributes={props.setAttributes}
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
        setAttributes={props.setAttributes}
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
        setAttributes={props.setAttributes}
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
        setAttributes={props.setAttributes}
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
              <div>
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
              </div>
            )}
            {!editEvent && <p className="small-text">click to edit</p>}
          </div>
        </div>
        <div className="Summary-container">
          <div className="Summary-Header-title">Host Name</div>
          <div
            className="Summary-Data"
            onClick={() => {
              if (!editArtist) {
                setEditEvent(false);
                setEditOpener(false);
                setEditArtist(true);
                setEditVenueDetails(false);
              }
            }}
          >
            {!editArtist && (
              <p className="Summary-Main">{props.formData.artist}</p>
            )}
            {editArtist && (
              <div>
                <button
                  className="EditButton"
                  onKeyPress={(e) => e.key === "Enter" && setEditArtist(false)}
                >
                  <input
                    className="edit-summary"
                    type="text"
                    placeholder="Edit artist"
                    value={props.formData.artist}
                    onChange={(e) => {
                      props.setFormData({
                        ...props.formData,
                        artist: e.target.value,
                      });
                    }}
                    required
                  />
                </button>
                <p className="small-text">Press Enter to save.</p>
              </div>
            )}
            {!editArtist && <p className="small-text">click to edit</p>}
          </div>
        </div>
        <div className="Summary-container">
          <div className="Summary-Header-title">Opener Name</div>
          <div
            className="Summary-Data"
            onClick={() => {
              if (!editOpener) {
                setEditEvent(false);
                setEditOpener(true);
                setEditArtist(false);
                setEditVenueDetails(false);
              }
            }}
          >
            {!editOpener && (
              <p className="Summary-Main">{props.formData.opener}</p>
            )}
            {editOpener && (
              <div>
                <button
                  className="EditButton"
                  onKeyPress={(e) => e.key === "Enter" && setEditOpener(false)}
                >
                  <input
                    className="edit-summary"
                    type="text"
                    placeholder="Edit artist"
                    value={props.formData.opener}
                    onChange={(e) => {
                      props.setFormData({
                        ...props.formData,
                        opener: e.target.value,
                      });
                    }}
                    required
                  />
                </button>
                <p className="small-text">Press Enter to save.</p>
              </div>
            )}
            {!editOpener && <p className="small-text">click to edit</p>}
          </div>
        </div>
      </div>
      <p className="Summary-Header">When and Where?</p>

      <div className="row">
      <div className="Summary-container">
          <div className="Summary-Header-title">Venue</div>
          <div
            className="Summary-Data"
            onClick={() => {
              if (!editVenueDetails) {
                setEditEvent(false);
                setEditOpener(false);
                setEditArtist(false);
                setEditVenueDetails(true);
              }
            }}
          >
            {!editVenueDetails && (
              <p className="Summary-Main">{props.formData.venue}</p>
            )}
            {editVenueDetails && (
              <div>
                <button
                  className="EditButton"
                  onKeyPress={(e) => e.key === "Enter" && setEditVenueDetails(false)}
                >
                  <input
                    className="edit-summary"
                    type="text"
                    placeholder="Edit artist"
                    value={props.formData.venue}
                    onChange={(e) => {
                      props.setFormData({
                        ...props.formData,
                        venue: e.target.value,
                      });
                    }}
                    required
                  />
                </button>
                <p className="small-text">Press Enter to save.</p>
              </div>
            )}
            {!editVenueDetails && <p className="small-text">click to edit</p>}
          </div>
        </div>

        <div className="Summary-container">
          <div className="Summary-Header-title">Date</div>
          <div
            className="Summary-Data"
            onClick={() => {
              if (!editVenueDetails) {
                setEditEvent(false);
                setEditOpener(false);
                setEditArtist(false);
                setEditVenueDetails(true);
              }
            }}
          >
            {!editVenueDetails && (
              <p className="Summary-Main">{props.formData.date.toDateString()}</p>
            )}
            {editVenueDetails && (
              <div>
                <button
                  className="EditButton"
                  onKeyPress={(e) => e.key === "Enter" && setEditVenueDetails(false)}
                >
                  <input
                    /* Need to put date choosing data here */
                  />
                </button>
                <p className="small-text">Press Enter to save.</p>
              </div>
            )}
            {!editVenueDetails && <p className="small-text">click to edit</p>}
          </div>
        </div>

        <div className="Summary-container">
          <div className="Summary-Header-title">Location</div>
          <div
            className="Summary-Data"
            onClick={() => {
              if (!editVenueDetails) {
                setEditEvent(false);
                setEditOpener(false);
                setEditArtist(false);
                setEditVenueDetails(true);
              }
            }}
          >
            {!editVenueDetails && (
              <p className="Summary-Main">
                  {props.formData.city}
                  {", "}
                  {props.formData.state}
                </p>
            )}
            {editVenueDetails && (
              <div className="location-summary">
                <button
                  className="EditButton"
                  onKeyPress={(e) => e.key === "Enter" && setEditVenueDetails(false)}
                >
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
                <input
                  className="edit-summary"
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
                </button>
                <p className="small-text">Press Enter to save.</p>
              </div>
            )}
            {!editVenueDetails && <p className="small-text">click to edit</p>}
          </div>
        </div>
    </div>




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

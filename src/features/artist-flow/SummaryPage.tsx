import { useState } from "react";
import AttributeImageUpload from "../../common/AttributeImageUpload";
import BaseImageUpload from "../../common/BaseImageUpload";
import { ATTRIBUTES, IFormData } from "../../common/interfaces";
import "./Artist.css";

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
      <div className="dark-container">
        <div className="row">
          <div className="col">
            <p>Attribute Image</p>
            <AttributeImageUpload
              currentAttribute={ATTRIBUTES.CITY}
              attributes={props.attributes}
              setAttributes={props.setAttributes}
            />
          </div>
          <div className="col">
            <p>City</p>
            <p>{props.formData.city}</p>
          </div>
        </div>
      </div>
    );
  }
  if (!!props.attributes.levelAttribute.imagePreview) {
    attributeDisplays.push(
      <div className="dark-container">
        <div className="row">
          <div className="col">
            <p>Attribute Image</p>
            <AttributeImageUpload
              currentAttribute={ATTRIBUTES.SEATING_LEVEL}
              attributes={props.attributes}
              setAttributes={props.setAttributes}
            />
          </div>
          <div className="col">
            <p>Seating Level</p>
            <p>{props.formData.level}</p>
          </div>
        </div>
      </div>
    );
  }
  if (!!props.attributes.stateAttribute.imagePreview) {
    attributeDisplays.push(
      <div className="dark-container">
        <div className="row">
          <div className="col">
            <p>Attribute Image</p>
            <AttributeImageUpload
              currentAttribute={ATTRIBUTES.STATE}
              attributes={props.attributes}
              setAttributes={props.setAttributes}
            />
          </div>
          <div className="col">
            <p>State</p>
            <p>{props.formData.state}</p>
          </div>
        </div>
      </div>
    );
  }
  if (!!props.attributes.venueAttribute.imagePreview) {
    attributeDisplays.push(
      <div className="dark-container">
        <div className="row">
          <div className="col">
            <p>Attribute Image</p>
            <AttributeImageUpload
              currentAttribute={ATTRIBUTES.VENUE}
              attributes={props.attributes}
              setAttributes={props.setAttributes}
            />
          </div>
          <div className="col">
            <p>Venue</p>
            <p>{props.formData.venue}</p>
          </div>
        </div>
      </div>
    );
  }
  if (!!props.attributes.dateAttribute.imagePreview) {
    attributeDisplays.push(
      <div className="dark-container">
        <div className="row">
          <div className="col">
            <p>Attribute Image</p>
            <AttributeImageUpload
              currentAttribute={ATTRIBUTES.EVENT_DATE}
              attributes={props.attributes}
              setAttributes={props.setAttributes}
            />
          </div>
          <div className="col">
            <p>Event Date</p>
            <p>{props.formData.date.toDateString()}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <p className="Summary-Header">Who and What?</p>
      <div className="row">
        <div className="Summary-container">
          {editEvent && (
            <div>
              <input
                className="input-style"
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
              <button onClick={() => setEditEvent(false)}>x</button>
            </div>
          )}
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
            <p className="Summary-Main">{props.formData.event}</p>
            <p className="small-text">click to edit</p>
          </div>
        </div>
        <div className="Summary-container">
          {editArtist && (
            <div>
              <input
                className="input-style"
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
                className="input-style"
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
                className="input-style"
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
                className="input-style"
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
        <div className="dark-container">
          Base File for the NFT
          <BaseImageUpload
            baseImageFile={props.baseImageFile}
            setBaseImageFile={props.setBaseImageFile}
            baseImagePreview={props.baseImagePreview}
            setBaseImagePreview={props.setBaseImagePreview}
          />
        </div>
      </div>
      {attributeDisplays}
    </>
  );
}

export default SummaryPage;

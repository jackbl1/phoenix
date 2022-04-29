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
      <p className="Home-title-container">Who and What?</p>
      <div className="row">
        <div
          className="dark-container"
          onClick={() => {
            if (!editEvent) {
              setEditEvent(true);
              setEditArtist(false);
              setEditVenueDetails(false);
            }
          }}
        >
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
          <div className="light-container-short">Event Name</div>
          {props.formData.event}
          <p className="small-text">click to edit</p>
        </div>
        <div
          className="dark-container"
          onClick={() => {
            if (!editArtist) {
              setEditArtist(true);
              setEditEvent(false);
              setEditVenueDetails(false);
            }
          }}
        >
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
          <div className="light-container-short">Host Name</div>
          {props.formData.artist}
          <p className="small-text">click to edit</p>
        </div>
      </div>
      <p className="Home-title-container">When and Where?</p>
      <div className="row">
        <div
          className="dark-container"
          onClick={() => {
            if (!editVenueDetails) {
              setEditVenueDetails(true);
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
          <div className="light-container-short">Venue</div>
          <div className="row">
            <div>{props.formData.venue}</div>
            <div>{props.formData.date.toDateString()}</div>
          </div>
          <div className="row">
            <div>
              {props.formData.city}
              {", "}
            </div>
            <div>{props.formData.state}</div>
          </div>
          <p className="small-text">click to edit</p>
        </div>
      </div>
      <p className="Home-title-container">NFT Attributes</p>
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

import { useState } from "react";
import { IAttribute, IFormData } from "../../../common/interfaces";
import "../Artist.css";
import AttributeSummary from "./AttributeSummary";
import { DatePicker } from "@fluentui/react";
import { ATTRIBUTES } from "../../../common/constants";
import ImageUpload from "../../../components/ImageUpload";
import { connect } from "react-redux";
import LotteryAttributeSummary from "./LotteryAttributeSummary";

interface ISummaryPageBaseProps {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
}

interface ISummaryPageReduxProps {
  attributeList?: { [key: string]: IAttribute };
}

interface ISummaryPageProps
  extends ISummaryPageBaseProps,
    Partial<ISummaryPageReduxProps> {}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  toggleTodo: () => dispatch(),
});

const mapStateToProps = (state: any) => {
  return {
    attributeList: state.createFlow.attributes,
  };
};

function SummaryPage(props: ISummaryPageProps) {
  const [editArtist, setEditArtist] = useState(false);
  const [editEvent, setEditEvent] = useState(false);
  const [editOpener, setEditOpener] = useState(false);
  const [editVenue, setEditVenue] = useState(false);
  const [editDate, setEditDate] = useState(false);
  const [editLocation, setEditLocation] = useState(false);

  const turnOffEdits = () => {
    setEditArtist(false);
    setEditEvent(false);
    setEditOpener(false);
    setEditVenue(false);
    setEditDate(false);
    setEditLocation(false);
  };

  var attributeDisplays = [];
  var lotteryAttributeDisplays = [];
  if (props.attributeList && props.attributeList[ATTRIBUTES.CITY].isCompleted)
    if (props.attributeList[ATTRIBUTES.CITY].isLottery) {
      lotteryAttributeDisplays.push(
        <LotteryAttributeSummary
          attributeConst={ATTRIBUTES.CITY}
          attributeLabel="City"
          attributeVal={props.formData.city}
        />
      );
    } else {
      attributeDisplays.push(
        <AttributeSummary
          attributeConst={ATTRIBUTES.CITY}
          attributeLabel="City"
          attributeVal={props.formData.city}
        />
      );
    }
  if (props.attributeList && props.attributeList[ATTRIBUTES.STATE].isCompleted)
    if (props.attributeList[ATTRIBUTES.STATE].isLottery) {
      lotteryAttributeDisplays.push(
        <LotteryAttributeSummary
          attributeConst={ATTRIBUTES.STATE}
          attributeLabel="State"
          attributeVal={props.formData.state}
        />
      );
    } else {
      attributeDisplays.push(
        <AttributeSummary
          attributeConst={ATTRIBUTES.STATE}
          attributeLabel="State"
          attributeVal={props.formData.state}
        />
      );
    }
  if (props.attributeList && props.attributeList[ATTRIBUTES.VENUE].isCompleted)
    if (props.attributeList[ATTRIBUTES.VENUE].isLottery) {
      lotteryAttributeDisplays.push(
        <LotteryAttributeSummary
          attributeConst={ATTRIBUTES.VENUE}
          attributeLabel="Venue"
          attributeVal={props.formData.venue}
        />
      );
    } else {
      attributeDisplays.push(
        <AttributeSummary
          attributeConst={ATTRIBUTES.VENUE}
          attributeLabel="Venue"
          attributeVal={props.formData.venue}
        />
      );
    }
  if (
    props.attributeList &&
    props.attributeList[ATTRIBUTES.EVENT_DATE].isCompleted
  )
    if (props.attributeList[ATTRIBUTES.EVENT_DATE].isCompleted) {
      lotteryAttributeDisplays.push(
        <LotteryAttributeSummary
          attributeConst={ATTRIBUTES.EVENT_DATE}
          attributeLabel="Event Date"
          attributeVal={props.formData.date.toDateString()}
        />
      );
    } else {
      attributeDisplays.push(
        <AttributeSummary
          attributeConst={ATTRIBUTES.EVENT_DATE}
          attributeLabel="Event Date"
          attributeVal={props.formData.date.toDateString()}
        />
      );
    }

  return (
    <>
      <p className="Summary-Header">Event Details</p>
      <div className="row">
        <div className="Summary-container">
          <div className="Summary-Header-title">Event Name</div>
          <div
            className="Summary-Data"
            onClick={() => {
              if (!editEvent) {
                turnOffEdits();
                setEditEvent(true);
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
                <button
                  className="save-button"
                  onClick={() => setEditEvent(false)}
                >
                  Save
                </button>
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
                turnOffEdits();
                setEditArtist(true);
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
                  onKeyPress={(e) => {
                    e.key === "Enter" && setEditArtist(false);
                  }}
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
                <button
                  className="save-button"
                  onClick={() => setEditArtist(false)}
                >
                  Save
                </button>
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
                turnOffEdits();
                setEditOpener(true);
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
                <button
                  className="save-button"
                  onClick={() => setEditOpener(false)}
                >
                  Save
                </button>
              </div>
            )}
            {!editOpener && <p className="small-text">click to edit</p>}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="Summary-container">
          <div className="Summary-Header-title">Venue</div>
          <div
            className="Summary-Data"
            onClick={() => {
              if (!editVenue) {
                turnOffEdits();
                setEditVenue(true);
              }
            }}
          >
            {!editVenue && (
              <p className="Summary-Main">{props.formData.venue}</p>
            )}
            {editVenue && (
              <div>
                <button
                  className="EditButton"
                  onKeyPress={(e) => e.key === "Enter" && setEditVenue(false)}
                >
                  <input
                    className="edit-summary"
                    type="text"
                    placeholder="Edit Venue"
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
                <button
                  className="save-button"
                  onClick={() => setEditVenue(false)}
                >
                  Save
                </button>
              </div>
            )}
            {!editVenue && <p className="small-text">click to edit</p>}
          </div>
        </div>

        <div className="Summary-container">
          <div className="Summary-Header-title">Date</div>
          <div
            className="Summary-Data"
            onClick={() => {
              if (!editDate) {
                turnOffEdits();
                setEditDate(true);
              }
            }}
          >
            {!editDate && (
              <p className="Summary-Main">
                {props.formData.date.toDateString()}
              </p>
            )}
            {editDate && (
              <div>
                <button
                  className="EditButton"
                  onKeyPress={(e) => e.key === "Enter" && setEditDate(false)}
                >
                  <DatePicker
                    className="date-input-style"
                    value={props.formData.date}
                    onSelectDate={(input: any) => {
                      props.setFormData({ ...props.formData, date: input });
                    }}
                    isRequired
                  />
                </button>
                <button
                  className="save-button"
                  onClick={() => setEditDate(false)}
                >
                  Save
                </button>
              </div>
            )}
            {!editDate && <p className="small-text">click to edit</p>}
          </div>
        </div>

        <div className="Summary-container">
          <div className="Summary-Header-title">Location</div>
          <div
            className="Summary-Data"
            onClick={() => {
              if (!editLocation) {
                turnOffEdits();
                setEditLocation(true);
              }
            }}
          >
            {!editLocation && (
              <p className="Summary-Main">
                {props.formData.city}
                {", "}
                {props.formData.state}
              </p>
            )}
            {editLocation && (
              <div className="location-summary">
                <button
                  className="EditButton"
                  onKeyPress={(e) => {
                    e.key === "Enter" && setEditLocation(false);
                  }}
                >
                  <div className="summary-row">
                    <input
                      className="edit-summary-loc"
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
                      className="edit-summary-loc"
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
                  </div>
                </button>
                <button
                  className="save-button"
                  onClick={() => setEditLocation(false)}
                >
                  Save
                </button>
              </div>
            )}
            {!editLocation && <p className="small-text">click to edit</p>}
          </div>
        </div>
      </div>

      <p className="Summary-Header">NFT Attributes</p>
      <div className="row">
        <div className="Summary-Header-title">
          Base File for the NFT
          <div className="Summary-Data">
            <ImageUpload attributeId="Base" />
          </div>
        </div>
      </div>
      <div className="row">{attributeDisplays}</div>
      <p className="Summary-Header">Lottery NFT Attributes</p>
      <div className="row">{lotteryAttributeDisplays}</div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);

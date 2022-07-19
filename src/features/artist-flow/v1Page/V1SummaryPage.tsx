import { useState } from "react";
import { IFormData, INft } from "../../../common/interfaces";
import "../Artist.css";
import { DatePicker } from "@fluentui/react";
import { connect } from "react-redux";
import ProgressBar from "../progressBar";
import { locationStateCity } from "../../../common/CityState";
import React from "react";
import V1NFTSummary from "./V1NFTSummary";

interface IV1SummaryPageBaseProps {
  formData: IFormData;
  setFormData: (input: IFormData) => void;
}

interface IV1SummaryPageReduxProps {
  nftList: [];
}

interface IV1SummaryPageProps
  extends IV1SummaryPageBaseProps,
    Partial<IV1SummaryPageReduxProps> {}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  toggleTodo: () => dispatch(),
});

const mapStateToProps = (state: any) => {
  return {
    nftList: state.createFlow.nfts,
  };
};

function V1SummaryPage(props: IV1SummaryPageProps) {
  const [editArtist, setEditArtist] = useState(false);
  const [editEvent, setEditEvent] = useState(false);
  const [editOpener, setEditOpener] = useState(false);
  const [editVenue, setEditVenue] = useState(false);
  const [editDate, setEditDate] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [currentCities, setCurrentCities] = useState(["Please select a state"]);

  const turnOffEdits = () => {
    setEditArtist(false);
    setEditEvent(false);
    setEditOpener(false);
    setEditVenue(false);
    setEditDate(false);
    setEditLocation(false);
  };

  return (
    <>
      <div className="flex flex-cols-3 w-full p-5 gap-5 place-items-top">
        <ProgressBar stepNumber={5} />

        <div className="cols-span-3 mx-auto">
          <div className="grid grid-cols-2 w-full gap-8 place-items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body text-left">
                <h2 className="card-title font-xl font-patrick text-secondary">
                  Event Name
                </h2>
                <div className="card bg-primary card-outline-warning p-5 w-full place-items-center">
                  {!editEvent && (
                    <div>
                      <p className="card-title">{props.formData.event}</p>
                    </div>
                  )}
                  {editEvent && (
                    <input
                      type="text"
                      placeholder="ex. concery, commedy show, etc."
                      className="input input-bordered input-warning w-full max-w-xs p-5"
                      value={props.formData.event}
                      onChange={(e) => {
                        props.setFormData({
                          ...props.formData,
                          event: e.target.value,
                        });
                      }}
                      onKeyPress={(e) =>
                        e.key === "Enter" && setEditEvent(false)
                      }
                      required
                    />
                  )}
                </div>
                {!editEvent && (
                  <div className="card-actions">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        if (!editEvent) {
                          turnOffEdits();
                          setEditEvent(true);
                        }
                      }}
                    >
                      {" "}
                      Edit
                    </button>
                  </div>
                )}
                {editEvent && (
                  <div className="card-actions">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        if (editEvent) {
                          setEditEvent(false);
                        }
                      }}
                    >
                      {" "}
                      Save
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body text-left">
                <h2 className="card-title font-xl font-patrick text-secondary">
                  Host Name
                </h2>
                <div className="card bg-primary p-5 w-full place-items-center">
                  {!editArtist && (
                    <div>
                      <p className="card-title">{props.formData.artist}</p>
                    </div>
                  )}
                  {editArtist && (
                    <input
                      type="text"
                      placeholder="ex. concert, comedy show, etc."
                      className="input input-bordered input-warning w-full max-w-xs p-5"
                      value={props.formData.artist}
                      onChange={(e) => {
                        props.setFormData({
                          ...props.formData,
                          artist: e.target.value,
                        });
                      }}
                      onKeyPress={(e) =>
                        e.key === "Enter" && setEditArtist(false)
                      }
                      required
                    />
                  )}
                </div>
                {!editArtist && (
                  <div className="card-actions">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        if (!editArtist) {
                          turnOffEdits();
                          setEditArtist(true);
                        }
                      }}
                    >
                      {" "}
                      Edit
                    </button>
                  </div>
                )}
                {editArtist && (
                  <div className="card-actions">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        if (editArtist) {
                          setEditArtist(false);
                        }
                      }}
                    >
                      {" "}
                      Save
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl m-2">
              <div className="card-body text-left">
                <h2 className="card-title font-xl font-patrick text-secondary">
                  Opener Name
                </h2>
                <div className="card bg-primary p-5 w-full place-items-center">
                  {!editOpener && (
                    <div>
                      <p className="card-title">{props.formData.opener}</p>
                    </div>
                  )}
                  {editOpener && (
                    <input
                      type="text"
                      placeholder="ex. concery, commedy show, etc."
                      className="input input-bordered input-warning w-full max-w-xs p-5"
                      value={props.formData.opener}
                      onChange={(e) => {
                        props.setFormData({
                          ...props.formData,
                          opener: e.target.value,
                        });
                      }}
                      onKeyPress={(e) =>
                        e.key === "Enter" && setEditOpener(false)
                      }
                      required
                    />
                  )}
                </div>
                {!editOpener && (
                  <div className="card-actions">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        if (!editOpener) {
                          turnOffEdits();
                          setEditOpener(true);
                        }
                      }}
                    >
                      {" "}
                      Edit
                    </button>
                  </div>
                )}
                {editOpener && (
                  <div className="card-actions">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        if (editOpener) {
                          setEditOpener(false);
                        }
                      }}
                    >
                      {" "}
                      Save
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl m-2">
              <div className="card-body text-left">
                <h2 className="card-title font-xl font-patrick text-secondary">
                  Venue
                </h2>
                <div className="card bg-primary p-5 w-full place-items-center">
                  {!editVenue && (
                    <div>
                      <p className="card-title">{props.formData.venue}</p>
                    </div>
                  )}
                  {editVenue && (
                    <input
                      type="text"
                      placeholder="ex. concery, commedy show, etc."
                      className="input input-bordered input-warning w-full max-w-xs p-5"
                      value={props.formData.venue}
                      onChange={(e) => {
                        props.setFormData({
                          ...props.formData,
                          venue: e.target.value,
                        });
                      }}
                      onKeyPress={(e) =>
                        e.key === "Enter" && setEditVenue(false)
                      }
                      required
                    />
                  )}
                </div>
                {!editVenue && (
                  <div className="card-actions">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        if (!editVenue) {
                          turnOffEdits();
                          setEditVenue(true);
                        }
                      }}
                    >
                      {" "}
                      Edit
                    </button>
                  </div>
                )}
                {editVenue && (
                  <div className="card-actions">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        if (editVenue) {
                          setEditVenue(false);
                        }
                      }}
                    >
                      {" "}
                      Save
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="card w-96 bg-base-100  shadow-xl m-2">
              <div className="card-body text-left">
                <h2 className="card-title font-xl font-patrick text-secondary">
                  Event Date
                </h2>
                <div className="card bg-primary p-5 w-full place-items-center">
                  {!editDate && (
                    <div>
                      <p className="card-title">
                        {props.formData.date.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  )}
                  {editDate && (
                    <DatePicker
                      className="date-input-style"
                      value={props.formData.date}
                      onSelectDate={(input: any) => {
                        props.setFormData({ ...props.formData, date: input });
                      }}
                      isRequired
                    />
                  )}
                </div>
                {!editDate && (
                  <div className="card-actions">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        if (!editDate) {
                          turnOffEdits();
                          setEditDate(true);
                        }
                      }}
                    >
                      {" "}
                      Edit
                    </button>
                  </div>
                )}
                {editDate && (
                  <div className="card-actions">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        if (editDate) {
                          setEditDate(false);
                        }
                      }}
                    >
                      {" "}
                      Save
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl m-2">
              <div className="card-body text-left">
                <h2 className="card-title font-xl font-patrick text-secondary">
                  Location
                </h2>
                <div className="card bg-primary p-5 w-full place-items-center">
                  {!editLocation && (
                    <div>
                      <p className="card-title">
                        {props.formData.city}
                        {", "}
                        {props.formData.state}
                      </p>
                    </div>
                  )}
                  {editLocation && (
                    <div>
                      <h2 className="card-title font-xl font-patrick text-secondary">
                        City
                      </h2>
                      <select
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        value={props.formData.city}
                        onChange={(e) => {
                          props.setFormData({
                            ...props.formData,
                            city: e.target.value,
                          });
                        }}
                        required
                      >
                        <option>Pick one</option>
                        {currentCities.map((city) => {
                          return <option>{city}</option>;
                        })}
                      </select>
                      <h2 className="card-title font-xl font-patrick text-secondary">
                        State
                      </h2>
                      <select
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        value={props.formData.state}
                        onChange={(e) => {
                          props.setFormData({
                            ...props.formData,
                            state: e.target.value,
                          });
                          let tempCities: string[] = [];
                          (locationStateCity[0] as { [key: string]: any })[
                            e.target.value
                          ].forEach((city: string) => {
                            tempCities.push(city);
                          });

                          setCurrentCities(tempCities);
                        }}
                        required
                      >
                        <option>Pick one</option>
                        {Object.keys(locationStateCity[0])
                          .sort()
                          .map((stateName) => {
                            return <option>{stateName}</option>;
                          })}
                      </select>
                    </div>
                  )}
                </div>
                {!editLocation && (
                  <div className="card-actions">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        if (!editLocation) {
                          turnOffEdits();
                          setEditLocation(true);
                        }
                      }}
                    >
                      {" "}
                      Edit
                    </button>
                  </div>
                )}
                {editLocation && (
                  <div className="card-actions">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        if (editLocation) {
                          setEditLocation(false);
                        }
                      }}
                    >
                      {" "}
                      Save
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="divider font-5xl font-patrick text-secondary">
            NFTs
          </div>
          {props.nftList?.map((nft: INft) => {
            return (
              <V1NFTSummary
                nftTitle={nft.nftTitle}
                nftGroup={nft.nftGroup}
                nftImageFile={nft.imageFile}
                nftImagePreview={nft.imagePreview}
                numNFTs={nft.numNFTs}
                ownershipPercent={nft.ownershipPercent}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(V1SummaryPage);

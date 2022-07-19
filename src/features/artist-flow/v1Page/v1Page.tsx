import {
  WHAT_IS_NFT,
  NFT_NAME,
  NFT_FILE,
  HOW_MANY,
  LASTING_OWNERSHIP,
  NFT_GROUP,
} from "../../../common/constantsText";
import { useState } from "react";
import { IAttribute, IFormData } from "../../../common/interfaces";
import { connect } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { addNFT, completeAttribute } from "../../../app/redux";
import ProgressBar from "../progressBar";
import V1NFTSummary from "./V1NFTSummary";

interface IV1PageBaseProps {
  guide: boolean;
  guideHandler: (input: boolean) => void;
  formData: IFormData;
}

interface IV1PageReduxProps {
  attributeList: { [key: string]: IAttribute };
}

interface IV1PageProps extends IV1PageBaseProps, Partial<IV1PageReduxProps> {}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  toggleTodo: () => dispatch(),
});

const mapStateToProps = (state: any) => {
  return {
    attributeList: state.createFlow.attributes,
  };
};

function V1Page(props: IV1PageProps) {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentGroup, setCurrentGroup] = useState("");
  const [currentNumNFTs, setNumNFTs] = useState(0);
  const [currentOwnershipPercent, setOwnershipPercent] = useState(0);
  const [currentImageFile, setCurrentImageFile] = useState("");
  const [currentImagePreview, setCurrentImagePreview] = useState("");
  const [attributeErrorMessage, setAttributeErrorMessage] = useState("");

  const [completedNFTs, setCompletedNFTs] = useState([<></>]);
  const dispatch = useAppDispatch();

  const selectFile: any = (event: any) => {
    setCurrentImageFile(event.target.files[0].name);
    setCurrentImagePreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleAddAttribute = () => {
    setAttributeErrorMessage("");
    if (currentTitle === "" || currentGroup === "" || currentImageFile === "") {
      setAttributeErrorMessage(
        "Please complete the current attribute before adding another"
      );
    } else {
      dispatch(
        addNFT({
          nftTitle: currentTitle,
          nftGroup: currentGroup,
          imageFile: currentImageFile,
          imagePreview: currentImagePreview,
          numNFTs: currentNumNFTs,
          ownershipPercent: currentOwnershipPercent,
        })
      );

      let tempNFTs = [...completedNFTs];
      tempNFTs.push(
        <V1NFTSummary
          nftTitle={currentTitle}
          nftGroup={currentGroup}
          nftImageFile={currentImageFile}
          nftImagePreview={currentImagePreview}
          numNFTs={currentNumNFTs}
          ownershipPercent={currentOwnershipPercent}
        />
      );

      setCompletedNFTs(tempNFTs);

      setCurrentTitle("");
      setCurrentGroup("");
      setCurrentImageFile("");
      setCurrentImagePreview("");
      setNumNFTs(0);
      setOwnershipPercent(0);
    }
  };

 return (
  <>
    <div className="grid grid-cols-3 w-full p-5 gap-5 place-items-top flex flex-wrap">
      <ProgressBar stepNumber={3} />
      <div className="rows-span-1">
        <div
          className="tooltip"
          data-tip="Text to explain what the heck you're supposed to do."
        >
          <button
            className="btn btn-outline btn-secondary m-2"
            onClick={() => props.guideHandler(true)}
          >
            Add Descriptive Text!
          </button>
        </div>
        <div className="tooltip" data-tip="Been there, Done that.">
          <button
            className="btn btn-outline btn-warning m-2"
            onClick={() => props.guideHandler(false)}
          >
            I got this, thanks.
          </button>
        </div>
        {props.guide ? (
          <>
              <div className="card w-full bg-base-100 shadow-xl m-5">
                <div className="card-body items-center text-center">
                  <div className="card-actions"></div>
                  {props.guide && (
                    <div>
                      <p className="artist-subheader">
                        What to do here?
                      </p>
                      <p className="descriptionParagraph">{WHAT_IS_NFT}</p>
                    </div>
                  )}
                </div>
              </div>

            <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
            <div className="card w-96 bg-base-100 shadow-xl mr-60 m-5">
                <figure className="px-10 pt-10">
                  <div className="form-control">
                    <div className="form-control w-full max-w-xs">
                      <span className="label-text font-patrick text-lg font-primary">
                        NFT Title
                      </span>
                      <label className="label"></label>
                      <input
                        type="text"
                        placeholder="Be creative!"
                        value={currentTitle}
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        onChange={(e) => {
                          setCurrentTitle(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                {props.guide && (
                    <div>
                      <p className="artist-subheader">
                        How to decide a Name?
                      </p>
                      <p className="descriptionParagraph">
                        {NFT_NAME}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
                <figure className="px-10 pt-10">
                  <div className="form-control">
                    <div className="form-control w-full max-w-xs">
                      <span className="label-text font-patrick text-lg font-primary">
                        Who receives this NFT?
                      </span>
                      <label className="label"></label>
                      <input
                        type="text"
                        placeholder="All attendees, VIPs, etc."
                        value={currentGroup}
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        onChange={(e) => {
                          setCurrentGroup(e.target.value);
                        }}
                      />
                    </div>
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
          </div>
          </>
        ) : (
          <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
          <div className="card w-96 bg-base-100 shadow-xl mr-60 m-5">
            <figure className="px-10 pt-10">
              <div className="form-control">
                <div className="form-control w-full max-w-xs">
                  <span className="label-text font-patrick text-lg font-primary">
                    NFT Title
                  </span>
                  <label className="label"></label>
                  <input
                    type="text"
                    placeholder="Be creative!"
                    value={currentTitle}
                    className="input input-bordered input-warning w-full max-w-xs p-5"
                    onChange={(e) => {
                      setCurrentTitle(e.target.value);
                    }}
                  />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center"></div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
            <figure className="px-10 pt-10">
              <div className="form-control">
                <div className="form-control w-full max-w-xs">
                  <span className="label-text font-patrick text-lg font-primary">
                    Who receives this NFT?
                  </span>
                  <label className="label"></label>
                  <input
                    type="text"
                    placeholder="All attendees, VIPs, etc."
                    value={currentGroup}
                    className="input input-bordered input-warning w-full max-w-xs p-5"
                    onChange={(e) => {
                      setCurrentGroup(e.target.value);
                    }}
                  />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center"></div>
          </div>
        </div>
        )}
        {props.guide ? (
          <>
            <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">

            <div className="card w-96 bg-base-100 shadow-xl mr-60 m-2">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title font-xl font-patrick">
                      NFT File
                    </h2>
                    <div className="card-actions">
                      <label htmlFor={currentTitle} title="Click to upload">
                        <p className="btn btn-primary m-3">Select File</p>
                        <div>
                          <img
                            className="preview"
                            src={currentImagePreview}
                            alt=""
                          />
                        </div>
                        <input
                          title=""
                          id={currentTitle}
                          type="file"
                          accept="image/*"
                          onChange={selectFile}
                          hidden
                        />
                      </label>
                    </div>
                    {props.guide && (
                    <div>
                      <p className="artist-subheader">What goes here?</p>
                      <p className="descriptionParagraph">
                        {NFT_FILE}
                      </p>
                    </div>
                  )}
                  </div>
                </div>
            
                <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
                  <figure className="px-10 pt-10">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text font-patrick text-lg font-primary">
                          How Many?
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="How many of this specific NFT"
                        value={currentNumNFTs}
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        min="0"
                        max={props.formData.ticketNum}
                        onChange={(e) => {
                          setNumNFTs(e.target.value as unknown as number);
                        }}
                      />
                    </div>
                  </figure>
                  <div className="card-body items-center text-center">
                    {props.guide && (
                      <div>
                        <p className="artist-subheader">What is this?</p>
                        <p className="descriptionParagraph">{HOW_MANY}</p>
                      </div>
                    )}
                  </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl mr-60 m-5">
                  <figure className="px-10 pt-10">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text font-patrick text-lg font-primary">
                          Lasting ownership % for you?
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="what % out of 100?"
                        value={currentOwnershipPercent}
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        min="0"
                        max="100"
                        onChange={(e) => {
                          setOwnershipPercent(
                            e.target.value as unknown as number
                          );
                        }}
                      />
                    </div>
                  </figure>
                  <div className="card-body items-center text-center">
                    {props.guide && (
                      <div>
                        <p className="artist-subheader">What is this?</p>
                        <p className="descriptionParagraph">
                          {LASTING_OWNERSHIP}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
  
                <button
                    onClick={handleAddAttribute}
                    className="btn btn-base-100"
                  >
                    add another?
                </button>
              <div className="text-lg text-bold text-accent">{attributeErrorMessage}</div>
              <div className="flex w-screen items-center">
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
            <div className="card w-96 bg-base-100 shadow-xl mr-60 m-2">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title font-xl font-patrick">
                      NFT File
                    </h2>
                    <div className="card-actions">
                      <label htmlFor={currentTitle} title="Click to upload">
                        <p className="btn btn-primary m-3">Select File</p>
                        <div>
                          <img
                            className="preview"
                            src={currentImagePreview}
                            alt=""
                          />
                        </div>
                        <input
                          title=""
                          id={currentTitle}
                          type="file"
                          accept="image/*"
                          onChange={selectFile}
                          hidden
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl ml-60 m-5">
                  <figure className="px-10 pt-10">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text font-patrick text-lg font-primary">
                          How Many?
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="How many of this specific NFT"
                        value={currentNumNFTs}
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        min="0"
                        max={props.formData.ticketNum}
                        onChange={(e) => {
                          setNumNFTs(e.target.value as unknown as number);
                        }}
                      />
                    </div>
                  </figure>
                  <div className="card-body items-center text-center">
                  </div>
                </div>



                <div className="card w-96 bg-base-100 shadow-xl mr-60 m-5">
                  <figure className="px-10 pt-10">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text font-patrick text-lg font-primary">
                          Lasting ownership % for you?
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="what % out of 100?"
                        value={currentOwnershipPercent}
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        min="0"
                        max="100"
                        onChange={(e) => {
                          setOwnershipPercent(
                            e.target.value as unknown as number
                          );
                        }}
                      />
                    </div>
                  </figure>
                  <div className="card-body items-center text-center">
                  </div>
                </div>
                <button
                    onClick={handleAddAttribute}
                    className="btn btn-base-100"
                  >
                    add another?
                </button>
              <div className="text-lg text-bold text-accent">{attributeErrorMessage}</div>
              <div className="flex w-screen items-center">
              </div>
            </div>
          </>
        )}
          {completedNFTs.length > 0 && (
            <>
              <div className="divider font-5xl font-patrick text-secondary">Completed</div>
              <div className="grid grid-cols-1 p-5 gap-5">
                {completedNFTs.map((curAttribute) => {
                  return curAttribute;
                })}
              </div>
            </>
          )}
      </div>
    </div>
  </>
);
}

export default connect(mapStateToProps, mapDispatchToProps)(V1Page);
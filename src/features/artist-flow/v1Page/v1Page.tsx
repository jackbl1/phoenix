import "../Artist.css";
import { useState } from "react";
import { IAttribute, IFormData } from "../../../common/interfaces";
import { connect } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { addNFT, completeAttribute } from "../../../app/redux";
import { HOW_MANY, LASTING_OWNERSHIP } from "../../../common/constantsText";
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
  const [currentImageFile, setCurrentImageFile] = useState("");
  const [currentImagePreview, setCurrentImagePreview] = useState("");
  const [attributeErrorMessage, setAttributeErrorMessage] = useState("");

  const [completedNFTs, setCompletedNFTs] = useState([<></>]);
  const dispatch = useAppDispatch();

  const selectFile: any = (event: any) => {
    setCurrentImageFile(event.target.files[0].name);
    setCurrentImagePreview(URL.createObjectURL(event.target.files[0]));
    dispatch(
      addNFT({
        nftTitle: currentTitle,
        nftGroup: currentGroup,
        imageFile: currentImageFile,
        imagePreview: currentImagePreview,
      })
    );
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
        })
      );

      let tempNFTs = [...completedNFTs];
      tempNFTs.push(
        <V1NFTSummary
          nftTitle={currentTitle}
          nftGroup={currentGroup}
          nftImageFile={currentImageFile}
          nftImagePreview={currentImagePreview}
        />
      );

      setCompletedNFTs(tempNFTs);

      setCurrentTitle("");
      setCurrentGroup("");
      setCurrentImageFile("");
      setCurrentImagePreview("");
    }
  };

  //   React.useEffect(() => {
  //     AttributesList.forEach((tempAttribute) => {
  //       if (
  //         props.attributeList &&
  //         props.attributeList[tempAttribute].isCompleted
  //       ) {
  //         let tempAttributes = [...completedAttributes];
  //         let tempData = props.attributeList
  //           ? props.attributeList[tempAttribute].data
  //           : "";

  //         if (props.attributeList[tempAttribute].isLottery) {
  //           tempAttributes.push(
  //             <LotteryAttributeSummary
  //               attributeConst={tempAttribute}
  //               attributeLabel={tempAttribute}
  //               attributeVal={tempData ? tempData : ""}
  //               isLottery={true}
  //             />
  //           );
  //         } else {
  //           tempAttributes.push(
  //             <AttributeSummary
  //               attributeConst={tempAttribute}
  //               attributeLabel={tempAttribute}
  //               attributeVal={tempData ? tempData : ""}
  //               isLottery={false}
  //             />
  //           );
  //         }

  //         setCompletedAttributes(tempAttributes);
  //         setGrayedOutAttributes([...grayedOutAttributes, tempAttribute]);
  //       }
  //     });
  //   }, []);

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
            <>guide stuff</>
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
                        Who receives the NFT?
                      </span>
                      <label className="label"></label>
                      <input
                        type="text"
                        placeholder="All attendees, VIPs, etc."
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
            <>guide stuff</>
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
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        min="0"
                        max={props.formData.ticketNum}
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
                        className="input input-bordered input-warning w-full max-w-xs p-5"
                        min="0"
                        max="100"
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
              </div>
            </>
          )}
          {completedNFTs.length > 0 && (
            <>
              <div className="divider"></div>
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

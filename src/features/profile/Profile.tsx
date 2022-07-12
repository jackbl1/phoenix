import Toolbar from "../toolbar/Toolbar";
import { Footer } from "../footer/Footer";
import troyPic from "../../assets/TroyNohra.png";

export function Profile() {
  return (
    <div>
      <Toolbar isOpaque={true} />

      <div className="lg:grid-cols-3  md:grid-cols-1 sm:grid-cols-1 p-5 w-screen place-items-top flex flex-wrap">
        <div className="rows-span-1">
          <button className="stats shadow bg-primary">
            <div className="stat place-items-center">
              <div className="stat-value">Profile</div>
              <div className="stat-desc">Click to edit</div>
            </div>
          </button>
          <div className="card w-80 bg-base-100 shadow-xl lg:m-10 m-5 bg-neutral lg:mx-auto">
            <div
              className="tooltip tooltip-bottom tooltip-primary"
              data-tip="Click to change"
            >
              <button
                className="avatar m-3 w-52 mask mask-squircle"
                /* Add ability to update profile picture here */
              >
                <img src={troyPic} />
              </button>
            </div>
            <h3 className="card-title flex flex-wrap m-3">
              <p className="text-primary">Address: </p>
              <div className="badge badge-info w-full overflow-scroll">0x52F3e2F14Fafed7135b6E2A3fA8afF5fB7661731</div>
            </h3>
            <h3 className="card-title flex flex-wrap m-3">
              <p className="text-primary">Username: </p>
              <button className="badge badge-secondary">Chose Username</button>
            </h3>
          </div>

          <div className="lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 place-items-center flex flex-wrap">
            <div className="stats shadow bg-primary lg:mr-1 m-1 mx-auto">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title font-bold">Phoenix Collections</div>
                <div className="stat-value text-secondary">11</div>
                <div className="stat-desc">Joined in 2021</div>
              </div>
            </div>
            <div className="stats shadow bg-primary lg:ml-1 m-1 mx-auto">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title font-bold">Concerts Attended</div>
                <div className="stat-value text-secondary">20</div>
                <div className="stat-desc">2 in last month</div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="rows-span-1 lg:mx-auto md:mx-auto">
          <button className="stats shadow bg-primary">
            <div className="stat place-items-center">
              <div className="stat-value">Collections</div>
              <div className="stat-desc">11 Total | 6 Public</div>
              <div className="stat-desc">Click to edit</div>
            </div>
          </button>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-5 gap-5 flex flex-wrap">

          <div className="card w-80 bg-base-100 shadow-xl lg:m-10 m-2 bg-neutral">
              <div
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip="Click to see more info"
              >
                <div
                  className="avatar m-3 w-52"
                >
                  <img src="https://api.lorem.space/image/face?hash=45350" />
                </div>
              </div>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performer: </p>
                <div className="badge badge-info">Artist Name</div>
              </h3>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performance Date: </p>
                <p className="badge badge-secondary">12/11/1996</p>
              </h3>
            </div>

            <div className="card w-80 bg-base-100 shadow-xl lg:m-10 m-2 bg-neutral">
              <div
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip="Click to see more info"
              >
                <div
                  className="avatar m-3 w-52"
                >
                  <img src="https://api.lorem.space/image/face?hash=45349" />
                </div>
              </div>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performer: </p>
                <div className="badge badge-info">Artist Name</div>
              </h3>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performance Date: </p>
                <p className="badge badge-secondary">12/11/1996</p>
              </h3>
            </div>

            <div className="card w-80 bg-base-100 shadow-xl lg:m-10 m-2 bg-neutral">
              <div
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip="Click to see more info"
              >
                <div
                  className="avatar m-3 w-52"
                >
                  <img src="https://api.lorem.space/image/face?hash=45348" />
                </div>
              </div>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performer: </p>
                <div className="badge badge-info">Artist Name</div>
              </h3>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performance Date: </p>
                <p className="badge badge-secondary">12/11/1996</p>
              </h3>
            </div>

            <div className="card w-80 bg-base-100 shadow-xl lg:m-10 m-2 bg-neutral">
              <div
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip="Click to see more info"
              >
                <div
                  className="avatar m-3 w-52"
                >
                  <img src="https://api.lorem.space/image/face?hash=45347" />
                </div>
              </div>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performer: </p>
                <div className="badge badge-info">Artist Name</div>
              </h3>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performance Date: </p>
                <p className="badge badge-secondary">12/11/1996</p>
              </h3>
            </div>

            <div className="card w-80 bg-base-100 shadow-xl lg:m-10 m-2 bg-neutral">
              <div
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip="Click to see more info"
              >
                <div
                  className="avatar m-3 w-52"
                >
                  <img src="https://api.lorem.space/image/face?hash=45346" />
                </div>
              </div>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performer: </p>
                <div className="badge badge-info">Artist Name</div>
              </h3>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performance Date: </p>
                <p className="badge badge-secondary">12/11/1996</p>
              </h3>
            </div>

            <div className="card w-80 bg-base-100 shadow-xl lg:m-10 m-2 bg-neutral">
              <div
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip="Click to see more info"
              >
                <div
                  className="avatar m-3 w-52"
                >
                  <img src="https://api.lorem.space/image/face?hash=45345" />
                </div>
              </div>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performer: </p>
                <div className="badge badge-info">Artist Name</div>
              </h3>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performance Date: </p>
                <p className="badge badge-secondary">12/11/1996</p>
              </h3>
            </div>

            </div>

            <div className="divider">Private Collection(s)</div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-5 gap-5 flex flex-wrap">

            <div className="card w-80 bg-base-100 shadow-xl lg:m-10 m-2 bg-neutral">
              <div
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip="Click to see more info"
              >
                <div
                  className="avatar m-3 w-52"
                >
                  <img src="https://api.lorem.space/image/face?hash=45344" />
                </div>
              </div>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performer: </p>
                <div className="badge badge-info">Artist Name</div>
              </h3>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performance Date: </p>
                <p className="badge badge-secondary">12/11/1996</p>
              </h3>
            </div>

            <div className="card w-80 bg-base-100 shadow-xl lg:m-10 m-2 bg-neutral">
              <div
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip="Click to see more info"
              >
                <div
                  className="avatar m-3 w-52"
                >
                  <img src="https://api.lorem.space/image/face?hash=45343" />
                </div>
              </div>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performer: </p>
                <div className="badge badge-info">Artist Name</div>
              </h3>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performance Date: </p>
                <p className="badge badge-secondary">12/11/1996</p>
              </h3>
            </div>

            <div className="card w-80 bg-base-100 shadow-xl lg:m-10 m-2 bg-neutral">
              <div
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip="Click to see more info"
              >
                <div
                  className="avatar m-3 w-52"
                >
                  <img src="https://api.lorem.space/image/face?hash=45342" />
                </div>
              </div>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performer: </p>
                <div className="badge badge-info">Artist Name</div>
              </h3>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performance Date: </p>
                <p className="badge badge-secondary">12/11/1996</p>
              </h3>
            </div>

            <div className="card w-80 bg-base-100 shadow-xl lg:m-10 m-2 bg-neutral">
              <div
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip="Click to see more info"
              >
                <div
                  className="avatar m-3 w-52"
                >
                  <img src="https://api.lorem.space/image/face?hash=45341" />
                </div>
              </div>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performer: </p>
                <div className="badge badge-info">Artist Name</div>
              </h3>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performance Date: </p>
                <p className="badge badge-secondary">12/11/1996</p>
              </h3>
            </div>

            <div className="card w-80 bg-base-100 shadow-xl lg:m-10 m-2 bg-neutral">
              <div
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip="Click to see more info"
              >
                <div
                  className="avatar m-3 w-52"
                >
                  <img src="https://api.lorem.space/image/face?hash=45340" />
                </div>
              </div>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performer: </p>
                <div className="badge badge-info">Artist Name</div>
              </h3>
              <h3 className="card-title flex flex-wrap m-3">
                <p className="text-primary">Performance Date: </p>
                <p className="badge badge-secondary">12/11/1996</p>
              </h3>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

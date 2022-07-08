import { useNavigate } from "react-router-dom";
import Toolbar from "../toolbar/Toolbar";
import { Footer } from "../footer/Footer";
import { connect } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { useEffect, useState } from "react";

export function Messages() {
  return (
    <div>
      <Toolbar isOpaque={false} />

      <div className="hero min-h-screen bg-gradient-to-r from-warning to-secondary">
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-warning btn-shadow drawer-button place-self-top lg:hidden"
            >
              Messages
            </label>

            <div className="hero w-full rounded-lg bg-neutral shadow m-3 ">
              <div className="text-neutral-content">
                <div className="max-w-full m-5">
                  <h1 className="top-0 mb-5 text-5xl font-bold align-top">
                    Jenny from the block
                  </h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-8 overflow-y-scroll shadow rounded-lg m-3 w-100 bg-neutral text-base-content">
              <div className="navbar mb-10 bg-primary rounded shadow w-full">
                <div className="w-full">
                  <div className="form-control w-full">
                    <input
                      type="text"
                      placeholder="Search"
                      className="input input-bordered"
                    />
                  </div>
                </div>
              </div>

              <div className="indicator">
                <span className="indicator-item badge badge-secondary">
                  99+
                </span>
                <li className="btn glass h-auto w-80 btn-base-100 m-2">
                  <a>
                    Jenny from the block
                    <div className="avatar">
                      <div className="w-12 mask mask-squircle">
                        <img src="https://api.lorem.space/image/face?hash=55350" />
                      </div>
                    </div>
                  </a>
                </li>
              </div>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  The boys are back
                  <div className="avatar-group -space-x-4">
                    <div className="avatar">
                      <div className="w-12 mask mask-squircle">
                        <img src="https://placeimg.com/192/191/people" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12 mask mask-squircle">
                        <img src="https://placeimg.com/192/190/people" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12 mask mask-squircle">
                        <img src="https://placeimg.com/192/189/people" />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 mask mask-squircle bg-neutral-focus text-neutral-content">
                        <span>+5</span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Jenny from the block
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=51250" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Jenny from the block
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=55700" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Jenny from the block
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=45350" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Jenny from the block
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=55340" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Jenny from the block
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=55350" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Jenny from the block
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=53250" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Jenny from the block
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=51250" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Jenny from the block
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=55700" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Jenny from the block
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=45350" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Jenny from the block
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=55340" />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

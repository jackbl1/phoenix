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
        <div className="drawer drawer-mobile h-3/4">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center h-3/4">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-warning btn-shadow drawer-button place-self-top lg:hidden"
            >
              Chats
            </label>

            <div className="grid grid-cols-1 h-full w-11/12 rounded-lg bg-neutral shadow relative overflow-scroll">
              <div className="p-5 left-0 top-0 w-full text-3xl bg-neutral text-primary font-bold overflow-scroll">
                <p className="">Post Malone Groupies</p>
              </div>

              <div className="grid grid-cols-1 w-full p-5 gap-5 place-items-top overflow-scroll">
                <div className="grid grid-cols-10 bg-base-100 rounded-xl w-full h-auto p-2 aling-left">
                  <div className="cols-start-1">
                    <div className="avatar online">
                      <div className="w-12 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 col-end-10">
                    <div className="text-lg text-neutral">
                      I've been popping pills man I feel just like a rock star.
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-10 bg-base-100 rounded-xl w-full h-auto p-2 aling-left">
                  <div className="cols-start-1">
                    <div className="avatar online">
                      <div className="w-12 rounded-full">
                        <img src="https://placeimg.com/192/190/people" />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 col-end-10">
                    <div className="text-lg text-neutral">
                      Man I fucking love posty.
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-10 bg-base-100 rounded-xl w-full h-auto p-2 aling-left">
                  <div className="cols-start-1">
                    <div className="avatar online">
                      <div className="w-12 rounded-full">
                        <img src="https://placeimg.com/192/122/people" />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 col-end-10">
                    <div className="text-lg text-neutral">
                      did you hear that he is playing in LA next week?
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-10 bg-base-100 rounded-xl w-full h-auto p-2 aling-left">
                  <div className="cols-start-1">
                    <div className="avatar online">
                      <div className="w-12 rounded-full">
                        <img src="https://placeimg.com/192/196/people" />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 col-end-10">
                    <div className="text-lg text-neutral">
                      I've been popping pills man I feel just like a rock star.
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-10 bg-base-100 rounded-xl w-full h-auto p-2 aling-left">
                  <div className="cols-start-1">
                    <div className="avatar online">
                      <div className="w-12 rounded-full">
                        <img src="https://placeimg.com/192/165/people" />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 col-end-10">
                    <div className="text-lg text-neutral">Hahaha stfu</div>
                  </div>
                </div>
                <div className="grid grid-cols-10 bg-base-100 rounded-xl w-full h-auto p-2 aling-left">
                  <div className="cols-start-1">
                    <div className="avatar online">
                      <div className="w-12 rounded-full">
                        <img src="https://placeimg.com/192/132/people" />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 col-end-10">
                    <div className="text-lg text-neutral">We gottttaaaa go</div>
                  </div>
                </div>
                <div className="grid grid-cols-10 bg-base-100 rounded-xl w-full h-auto p-2 aling-left">
                  <div className="cols-start-1">
                    <div className="avatar online">
                      <div className="w-12 rounded-full">
                        <img src="https://placeimg.com/192/132/people" />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-2 col-end-10">
                    <div className="text-lg text-neutral">Cmonnnnn</div>
                  </div>
                </div>
              </div>

              <div className="bottom-0 align-self-center w-full bg-neutral">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered text-neutral w-10/12 m-3"
                />
                <button className="btn btn-primary">Send</button>
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
                    Post Malone Groupies
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
                  Jenny
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=51250" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Travis
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=55700" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Mt. Joy Fan Club
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=45350" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Che Cafe
                  <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                      <img src="https://api.lorem.space/image/face?hash=55340" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="btn glass h-auto w-80 btn-base-100 m-2">
                <a>
                  Indie Rock enthusiasts
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

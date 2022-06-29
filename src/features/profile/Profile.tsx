import { useNavigate } from "react-router-dom";
import Toolbar from "../toolbar/Toolbar";
import { Footer } from "../footer/Footer";
import { connect } from "react-redux";
import { setIsWalletConnected } from "../../app/redux";
import { useAppDispatch } from "../../app/hooks";
import { useEffect, useState } from "react";

export function Profile() {
  return (
    <div>
      <Toolbar isOpaque={true} />

      <div className="grid grid-cols-2 w-full p-5 gap-5 place-items-center flex flex-wrap">
        <div className="cols-span-1">
        <div className="card w-96 bg-base-100 shadow-xl m-10 bg-neutral">
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="Click to change">
            <button className="avatar m-3 w-52 mask mask-squircle"
              /* Add ability to update profile picture here */
            >
                <img src="https://api.lorem.space/image/face?hash=55350" />
            </button>
            </div>
          <h3 className="card-title flex flex-wrap m-3">
            <p className="text-primary">Address: </p>
            <div className="badge badge-info">{/*currentAccount*/}</div>
          </h3>
          <h3 className="card-title flex flex-wrap m-3">
            <p className="text-primary">Username: </p>
            <button className="badge badge-secondary">Chose Username</button>
          </h3>
        </div>

        <div className="stats shadow ml-10">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">Phoenix Collections</div>
            <div className="stat-value text-secondary">12</div>
            <div className="stat-desc">Joined in 2021</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">Concerts Attended</div>
            <div className="stat-value text-secondary">20</div>
            <div className="stat-desc">2 in last month</div>
          </div>
        </div>
        </div>
        <div className="cols-span-1">

        </div>
        </div>
    </div>
  );
}

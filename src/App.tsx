import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Toolbar } from "./features/toolbar/Toolbar";
import "./App.css";

function App() {

  var lastScrollTop: any;
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll',function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
    navbar.style.top='-80px';
  }
  else{
    navbar.style.top='0';
  }
  lastScrollTop = scrollTop;

  return (
    <div className="App">
      <Toolbar />
      <div className="App-page">
        <header className="App-header">
          <p className="title-container">Radar</p>
          <p className="subtitle-container">
            Get on the radar. Expand your brand.
          </p>
          <div className="row">
            <button className="button-style">Mint my NFT</button>
            <button className="button-style">Create NFT drop</button>    
          </div>

          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div>
    </div>
  );
}

export default App;

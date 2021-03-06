import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import { About } from "./features/about/About";
import { ArtistFlow } from "./features/artist-flow/ArtistFlow";
import { Documentation } from "./features/documentation/Documentation";
import { MintFlow } from "./features/mint-flow/MintFlow";
import { ContactUs } from "./features/contact-us/ContactUs";
import { Profile } from "./features/profile/Profile";
import { Messages } from "./features/messages/messages";

//import { syncHistoryWithStore, routerReducer } from "react-router-redux";

// Add the reducer to your store on the `routing` key
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     routing: routerReducer,
//   })
// );

// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<ArtistFlow />} />
        <Route path="/mint" element={<MintFlow />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

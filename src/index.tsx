import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StateType, store } from "./Redux/state";


// type PropsType={
//     store:StorepropsType
// }
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
const rerender = (state:StateType) => {
  
  root.render(
    <BrowserRouter>
      <App
       state={state}
       dispatch={store.dispatch.bind(store)} 
       />
    </BrowserRouter>,
  );
};
rerender(store.getState());
store.subscriber(rerender);

reportWebVitals();

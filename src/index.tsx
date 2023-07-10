import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StorepropsType, store } from "./Redux/state";






type PropsType={
    store:StorepropsType
}

const rerender = (props:PropsType) => {
   const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
  root.render(
    <BrowserRouter>
      {/* <App
        state={props.store._state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
      /> */}
      <App
        state={props.store._state}
        dispatch={store.dispatch.bind(store)}
        // updateNewPostText={store.updateNewPostText.bind(store)}
      />
    </BrowserRouter>
  );
};
rerender(store.getState());
store.subscriber(rerender);

reportWebVitals();

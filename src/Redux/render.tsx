import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";
//  import state from "./state";
import state, { StateType, addPost } from "./state";
import App from "../App";
// import { state } from '.';


// addPost()
// 
type rendePropsType=StateType
export let rerender=(props:rendePropsType)=>{
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <BrowserRouter>
      <App state={state}  addPost={addPost}/>
    </BrowserRouter>
  ); 
}

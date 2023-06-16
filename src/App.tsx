import React, { useState } from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProFile from "./components/ProFile/ProFile";
import MyPosts from "./components/ProFile/MyPosts/MyPosts";
import Dialogs from "./components/Dialogs/Dialogs";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { StateType } from "./Redux/state";
// const Component = () => <Dialogs id={0} name={""} message={""} />;
// let SomeComponent=()=><Dialogs id={0} name={""} message={""} />




type PropsType={
state:StateType
}
// type messagesType={
// newmessages:
// }


const App = (props:PropsType) => {
  // let postData = [
  //   { id: 1, message: "Hi, how are you?", like: "15" },
  //   { id: 2, message: "Its my first post", like: "22" },
  //   { id: 3, message: "Hi, how are you?", like: "55" },
  //   { id: 4, message: "Its my first post", like: "62" },
  //   { id: 5, message: "Hi, how are you?", like: "17" },
  //   { id: 6, message: "Its my first post", like: "72" },
  // ];
  return (
    <div className="app">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Switch>
          {/* <Route
                path="/dialogs"
                element={<Dialogs id={0} name={""} message={""} />}
              />
              <Route path="/profile" 
              element={<ProFile />} />
            </Routes>
            <Routes> */}
          <Route
            exact
            path="/dialogs"
          render={()=>  <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}   />} 
          />
          <Route exact
           path="/profile" 
           render={() => <ProFile data={props.state.profilePages.postsData} />} 
           />
        </Switch>
      </div>
    </div>
  );
};
export default App;

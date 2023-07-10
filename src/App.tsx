import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProFile from "./components/ProFile/ProFile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { StateType, StorepropsType } from "./Redux/state";


type PropsType = {
  state: StateType;
  dispatch: (action: any) => void;
};

const App: React.FC<PropsType> = (props) => {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Switch>
          <Route
            exact
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={() => (
              <ProFile
                data={props.state.profilePages.postsData}
                newPostText={props.state.profilePages.newPostText}
                dispatch={props.dispatch}
                // addPost={props.store.addPost.bind(props.store)}
                // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};
export default App;
//

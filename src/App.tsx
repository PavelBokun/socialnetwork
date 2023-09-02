import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProFile from "./components/ProFile/ProFile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { StateType, StorepropsType, store } from "./Redux/state";

type AppPropsType = {
  store: StorepropsType;
  // dispatch: (action: any) => void;
};

const App: React.FC<AppPropsType> = (props) => {
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
                // dialogs={props.store._state.dialogsPage.dialogs}
                // messages={props.store._state.dialogsPage.messages}
                // state={props.store._state}
                store={store}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={() => (
              <ProFile
                data={props.store._state.profilePages.postsData}
                newPostText={props.store._state.profilePages.newPostText}
                dispatch={props.store.dispatch.bind(props.store)}
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

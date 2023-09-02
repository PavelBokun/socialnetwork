import { ActionsTypes } from "./state";
import { StateType } from "./state";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

 export const profileReducer=(state:StateType,action:ActionsTypes)=>{

   
        if (action.type === "ADD_POST") {
          let newPost= {
            id: 5,
            message: action.newPost,
            like: "2",
          };
          state.profilePages.postsData.push(newPost);
        state.profilePages.newPostText = "";
        } else if (action.type === "UPDATE_NEW_POST_TEXT") {
          state.profilePages.newPostText = action.newText;
          
        
    };
    return state
}

import React from "react";
import { profileReducer } from "./profile-reducer";
import { sideBarReducer } from "./sideBar-reducer";
import { dialogsReducer } from "./dialog-reducer";

// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const NEW_MESSAGE = "NEW_MESSAGE";
// const SENT_MESSAGE = "SENT_MESSAGE";

export type MessageType = {
  id: number;
  message: string;
};

export type DialogType = {
  id: number;
  name: string;
};
export type PostType = {
  id: number;
  message: string;
  like: string;
};
export type FriendsType = {
  id: number;
  name: string;
};

export type ProfilePropsPageType = {
  postsData: Array<PostType>;
  newPostText: string;
};
export type DialogsPropsPageType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
  newMessageText: string;
};
export type SaidbarPropsType = {
  [x: string]: any;
  friends: Array<FriendsType>;
};
export type StateType = {
  profilePages: ProfilePropsPageType;
  dialogsPage: DialogsPropsPageType;
  saidbarPage: SaidbarPropsType;
};
export type StorepropsType = {
  _state: StateType;
  subscriber: (observer: (state: StateType) => void) => void;
  _callSubscriber: (state: StateType) => void;
  getState: () => StateType;
  dispatch: (action:AddPostActionType|
    UpdateNewPostActionType|
    NewMessageActiontype|
    SendMessageActiontype) => void;
};
type AddPostActionType= ReturnType<typeof addPostAC>
type UpdateNewPostActionType=ReturnType<typeof updatePostChangeAC>
type NewMessageActiontype=ReturnType<typeof updateNewMessageBodyAC>
type SendMessageActiontype=ReturnType<typeof sendMessageAC>


export type ActionsTypes=AddPostActionType|UpdateNewPostActionType|NewMessageActiontype|SendMessageActiontype
export const store: StorepropsType = {
  _callSubscriber(state: StateType) {
    console.log("state chenged");
  },
  _state: {
    profilePages: {
      postsData: [
        { id: 1, message: "Hi, how are you?", like: "15" },
        { id: 2, message: "Its my first post", like: "22" },
        { id: 3, message: "Hi, how are you?", like: "55" },
        { id: 4, message: "Its my first post", like: "62" },
        { id: 5, message: "Hi, how are you?", like: "17" },
        { id: 6, message: "Its my first post", like: "72" },
      ],
      newPostText: "it-kamasutra",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Ola" },
        { id: 2, name: "Pasha" },
        { id: 3, name: "Valia" },
        { id: 4, name: "Sasha" },
      ],

      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Who are you" },
        { id: 3, message: "Ok" },
        { id: 4, message: "Good buy" },
      ],
      newMessageText: "",
    },
    saidbarPage: {
      friends: [
        { id: 1, name: "Alex" },
        { id: 2, name: "Pasha" },
        { id: 3, name: "Can" },
        { id: 4, name: "Barbara" },
      ],
    },
  },
  getState() {
    return this._state;
  },
    subscriber(observer: (state: StateType) => void) {
    this._callSubscriber = observer;
  },



  dispatch(action) {

this._state.profilePages=profileReducer(this._state.profilePages,action);
this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
this._state.saidbarPage=sideBarReducer(this._state.saidbarPage,action);

    
    // if (action.type === "ADD_POST") {
    //   let newPost= {
    //     id: 5,
    //     message: action.newPost,
    //     like: "2",
    //   };
    //   this._state.profilePages.postsData.push(newPost);
    //   this._callSubscriber(this._state);
    //   this._state.profilePages.newPostText = "";
    // } else if (action.type === "UPDATE_NEW_POST_TEXT") {
    //   this._state.profilePages.newPostText = action.newText;
    //   this._callSubscriber(this._state);
    // } else if (action.type === "NEW_MESSAGE") {
    //   this._state.dialogsPage.newMessageText = action.body;
    //   this._callSubscriber(this._state);
    // } else if (action.type === "SENT_MESSAGE") {
    //   let body = this._state.dialogsPage.newMessageText;
    //   this._state.dialogsPage.newMessageText = "";
    //   this._state.dialogsPage.messages.push({ id: 5, message: body });
      this._callSubscriber(this._state);
    }
  }

export const addPostAC = (newPost:string) => {
  return {
    type: "ADD_POST",
    newPost:newPost
  } as const;
};
export const updatePostChangeAC = (text: any) => {
  return { type: "UPDATE_NEW_POST_TEXT", newText: text } as const;
};
export const sendMessageAC = () => {
  return { type: "SENT_MESSAGE" } as const;
};
export const updateNewMessageBodyAC = (body: string) => {
  return { type: "NEW_MESSAGE", body: body } as const;
};

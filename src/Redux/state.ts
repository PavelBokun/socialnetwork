import React from "react";


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
  // updateNewPostText: (newText: string) => void;
  // addPost: (postText: string) => void;
  subscriber: (observer: (state:StateType) => void) => void;
  _callSubscriber: (state:StateType) => void;
  getState: () => StateType;
  dispatch:(action:any)=>void
};
export const store: StorepropsType = {
  _callSubscriber(state:StateType) {
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
  // addPost(postText: string) {
  //   let newPost: PostType = {
  //     id: 5,
  //     message: this._state.profilePages.newPostText,
  //     like: "2",
  //   };
  //   this._state.profilePages.postsData.push(newPost);
  //   this._callSubscriber();
  // },
  // updateNewPostText(newText: string) {
  //   this._state.profilePages.newPostText = newText;
  //   this._callSubscriber();
  // },
  subscriber(observer: (state:StateType) => void) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost: PostType = {
        id: 5,
        message: this._state.profilePages.newPostText,
        like: "2",
      };
      this._state.profilePages.postsData.push(newPost);
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePages.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};



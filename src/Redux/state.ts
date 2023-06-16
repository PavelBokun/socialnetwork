import React from "react";
// let postData = [
//   { id: 1, message: "Hi, how are you?", like: "15" },
//   { id: 2, message: "Its my first post", like: "22" },
//   { id: 3, message: "Hi, how are you?", like: "55" },
//   { id: 4, message: "Its my first post", like: "62" },
//   { id: 5, message: "Hi, how are you?", like: "17" },
//   { id: 6, message: "Its my first post", like: "72" },
// ];
// let dialogs = [
//   { id: 1, name: "Ola" },
//   { id: 2, name: "Pasha" },
//   { id: 3, name: "Valia" },
//   { id: 4, name: "Sasha" },
// ];
// let messages = [
//   { id: 1, message: "Hi" },
//   { id: 2, message: "Who are you" },
//   { id: 3, message: "Ok" },
//   { id: 4, message: "Good buy" },
// ];
export type MessageType = {
    id: number;
    message: string;
  };
  
  export type DialogType = {
    id: number;
    name: string;
  };
  export type PostType={
    id:number
    message:string
    like:string
  }
  export type FriendsType = {
    id: number;
    name: string;
  };

  type ProfilePropsPageType={
    postsData:Array<PostType>
  }
  type DialogsPropsPageType={
    dialogs:Array<DialogType>
    messages:Array<MessageType>
  }
   export type SaidbarPropsType={
    [x: string]: any;
    friends:Array<FriendsType>
  }
export type StateType={

//     postsData:PostType[];
//     dialogs:DialogType[];
//   messages:MessageType[];
profilePages:ProfilePropsPageType
dialogsPage:DialogsPropsPageType
saidbarPage:SaidbarPropsType
  }
  
 

const state:StateType = { 
    profilePages:{
        postsData: [
            { id: 1, message: "Hi, how are you?", like: "15" },
            { id: 2, message: "Its my first post", like: "22" },
            { id: 3, message: "Hi, how are you?", like: "55" },
            { id: 4, message: "Its my first post", like: "62" },
            { id: 5, message: "Hi, how are you?", like: "17" },
            { id: 6, message: "Its my first post", like: "72" },
          ]
    },
    
    dialogsPage:{
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
        ]
        
    },
    saidbarPage:{
        friends:[
            { id: 1, name: "Ola2" },
            { id: 2, name: "Pasha2" },
            { id: 3, name: "Valia2" },
            { id: 4, name: "Sasha2" }
        ]
    }
    
  
}
;

export default state;

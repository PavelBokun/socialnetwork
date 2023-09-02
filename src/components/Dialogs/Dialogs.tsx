import React, {  TextareaHTMLAttributes } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Messages";
import { DialogType, MessageType, StateType, StorepropsType, sendMessageAC, updateNewMessageBodyAC } from "../../Redux/state";



 export type PropsType = {
  // dialogs: DialogType[];
  // messages: MessageType[];
  // state:StateType
  store:StorepropsType
};
const Dialogs = (props: PropsType) => {
  
  const state=props.store.getState().dialogsPage // в переменную state закинули getState() диалогспадж
  const dialogsElements = state.dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));
  const messagesElements = state.messages.map((el) => (
    <Message message={el.message} id={el.id} />
  ));
  let newMesssageBody  = state.newMessageText;
  
  const onHandlerSendMessageClick=()=>{
    props.store.dispatch(sendMessageAC())
 
  }
  const onHandlerNewMessage=(e:any)=>{
    
  let body= e.target.value;
  props.store.dispatch(updateNewMessageBodyAC(body))
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
        {/* <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} /> */}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea value={newMesssageBody}
          onChange={onHandlerNewMessage} 
          placeholder="Enter your message" >
            </textarea></div>
          <div><button onClick={()=>{onHandlerSendMessageClick}}>Send</button></div>
        </div>

        {/* <Message message="Hi" />
        <Message message="Hellow" /> */}
      </div>
    </div>
  );
};
export default Dialogs;

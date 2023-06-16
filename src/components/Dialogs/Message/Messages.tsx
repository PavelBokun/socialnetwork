import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

type dilogItemType = {
  name: string;
  id: number;
};
type messageType = {
  id: number;
  message: string;
};

type DialogsPropsType = {
  id: number;
  name: string;
  message: string;
};
// type MessageDataPropsType={
//     id: number;
//     message:string
// }

const Message = (props: messageType) => {
  return (
    <div className={s.messages}>
      <div className={s.message}>{props.message}</div>
    </div>
  );
};

export default Message;

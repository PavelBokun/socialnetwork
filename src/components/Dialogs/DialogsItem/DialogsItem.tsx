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

const DialogItem = (props: dilogItemType) => {
  let path = "/dialogs/1" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;

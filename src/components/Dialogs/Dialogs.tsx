import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Messages";
import { DialogType, MessageType } from "../../Redux/state";



 export type PropsType = {
  dialogs: DialogType[];
  messages: MessageType[];
};


// type MessageDataPropsType={
//     id: number;
//     message:string
// }

// const DialogItem = (props: dilogItemType) => {    /////////// перенесли
//   let path = "/dialogs/1" + props.id;
//   return (
//     <div className={s.dialog + " " + s.active}>
//       <NavLink to={path}>{props.name}</NavLink>
//     </div>
//   );
// };

const Dialogs = (props: PropsType) => {
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
  const dialogsElements = props.dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));
  const messagesElements = props.messages.map((el) => (
    <Message message={el.message} id={el.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}

        {/* <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} /> */}
      </div>
      <div className={s.messages}>
        {messagesElements}
        {/* <Message message="Hi" />
        <Message message="Hellow" /> */}
      </div>
    </div>
  );
};
export default Dialogs;

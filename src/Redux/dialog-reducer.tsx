import { ActionsTypes, StateType } from "./state";

export const dialogsReducer=(state:StateType,action:ActionsTypes)=>{
    
      if (action.type === "NEW_MESSAGE") {
        state.dialogsPage.newMessageText = action.body;
       
      } else if (action.type === 'SENT_MESSAGE') {
        let body = state.dialogsPage.newMessageText;
        state.dialogsPage.newMessageText = "";
        state.dialogsPage.messages.push({ id: 5, message: body });
        
      }
    
  
    return state
}

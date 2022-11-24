import React from 'react';

export const Dialogs = () => {
    return (
        <div>
            Это страница диалогов
        </div>
    )
}

// import React from "react";
// import Classes from './Dialogs.module.css'
// import {DialogItem} from "./DialogItem/DialogItem";
// import {Message} from "./Message/Message";
//
// export const Dialogs = (props) => {
//     let messagesElements = props.state.messagesPage.messagesData
//         .map(messages => <Message message={messages.message} key={messages.id} id={messages.id}></Message>)
//
//     let dialogsElements = props.dialogsData
//         .map(dialog => <DialogItem id={dialog.id} key={dialog.id} name={dialog.name}/>)
//
//     let newMessage = React.createRef()
//
//     let addMessage = () => {
//         props.addMessage(newMessage.current.textarea);
//     }
//
//     let onMessageChange = () => {
//         let message = newMessage.current.value;
//         props.onMessageChange(message)
//     }
//
//     return (
//         <div>
//             <div className={Classes.dialogsWrapper}>
//                 <h2>DIALOGS</h2>
//                 <div className={Classes.dialogs}>
//                     <div className={Classes.dialogsNames}>
//                         {dialogsElements}
//                     </div>
//                     <div className={Classes.messages}>
//                         {messagesElements}
//                     </div>
//                 </div>
//             </div>
//             <div className={Classes.text_adder}>
//                 <textarea ref={newMessage} onChange={onMessageChange} value={props.newMessageText} />
//                 <button onClick={addMessage}>add</button>
//             </div>
//         </div>
//     )
// }

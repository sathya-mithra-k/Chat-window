import React from 'react';

function ChatFooter({userInput, sendMessage}){
    return(
        <div classname = "chat-footer">
            <input 
            type = "text"
            value = {userInput}
            placeholder = "Enter your message here"></input>
            <button onClick = {sendMessage}>Send</button>
        </div>
    )
}
export default ChatFooter;
import React from 'react';
import Message from './Message';
import Loader from './Loader';

function ChatBody({message,loading}){
    return(
        <div className = "chat-body">
            {message.map((msg,index)=>(
                <Message key={index} text = {msg.text} sender = {msg.sender}/>
            ))}
            {loading && <Loader />}
        </div>
    );
}
export default ChatBody;

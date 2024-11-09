import React from 'react';

function ChatFooter({ userInput, handleInputChange, sendMessage }) {
  return (
    <div className="chat-footer">
      <input 
        type="text" 
        value={userInput} 
        onChange={handleInputChange} 
        placeholder="Enter your message here" 
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatFooter;

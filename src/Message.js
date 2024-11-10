import React from 'react';

function Message({ text, sender }) {
  return (
    <div className={sender === 'user' ? 'message user' : 'message bot'}>
      {text}</div>
  );
}
export default Message;

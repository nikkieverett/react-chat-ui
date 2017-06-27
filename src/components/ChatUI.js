import React from 'react';
import Input from './Input.js';
import Messages from './Messages.js';


class ChatUI extends React.Component {
  render() {
    return (
      <div className="chat-container">
        <h1>I'm the chat ui</h1>
        <Messages />
        <Input />
      </div>
    );
  }
}

export default ChatUI;

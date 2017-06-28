import React from 'react';

import Messages from './Messages.js';

class MessageList extends React.Component{
  render() {
    return (
      <div className="message-list-container">
        <h3>I'm the list of messages</h3>
        <Messages />
      </div>
    );
  }
}

export default MessageList;

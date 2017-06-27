import React from 'react';

import Messages from './Messages.js';

class MessageList extends React.Component{
  render() {
    return (
      <div className="message-list-container">
        <h3>I'm the list of messages</h3>
        //should display a list of users that have sent messages and the last message sent
        <Messages />
      </div>
    );
  }
}

export default MessageList;

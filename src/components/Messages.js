import React from 'react';

class Messages extends React.Component{
  render() {
    console.log(this.props.messages);
    let messages = this.props.messages.map((x, i) => <div key={i} className="bubble">{x}</div>)
    return (
      <div className="message-list">
        {messages}
      </div>
    );
  }
}

export default Messages;

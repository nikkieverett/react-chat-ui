import React from 'react';

class Messages extends React.Component{
  render() {
    console.log(this.props);
    let messages = this.props.messages.map((x, i) => {
      return(
        <div key={i} className="message">
          <div className="user">{this.props.userName}</div>
          <div className="bubble">{x}</div>
        </div>
      )
    })
    return (
      <div className="message-list">
        {messages}
      </div>
    );
  }
}

export default Messages;

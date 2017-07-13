import React from 'react';
import firebase from '../server/server.js';

class Messages extends React.Component{
  render(){
    let messages = this.props.messages.map((x, i) => {
      return(
        <div key={x + i} className="bubble">
          <span>{x.username}:</span> {x.message}
        </div>
      )
    });
    return(
      <div>{messages}</div>
    );
  }
}

export default Messages;

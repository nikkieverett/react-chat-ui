import React from 'react';
import Messages from './Messages.js';
import firebase from '../server/server.js';

class ChatUI extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }
  handleChange(evt){
    this.setState({
      input: evt.target.value
    })
  }
  writeNewPost(username, message) {
    var messageData = {
      username: this.props.userName,
      message: this.state.input
    };
    firebase.database().ref('messages').push(messageData);
  }
  handleKeyUp(evt){
    if(evt.keyCode === 13){
      this.writeNewPost(this.props.userName, this.state.input);
      this.setState({
        input: ''
      })
    }
  }
  render() {
    return (
      <div className="chat-container">
        <h1>I'm the chat ui</h1>
        <Messages />
        <input
          placeholder="type message here"
          value={this.state.input}
          onChange={(evt) => this.handleChange(evt)}
          onKeyUp={(evt) => this.handleKeyUp(evt)}/>
      </div>
    );
  }
}

export default ChatUI;

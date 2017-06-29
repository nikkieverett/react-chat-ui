import React from 'react';
import Input from './Input.js';
import Messages from './Messages.js';

class ChatUI extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
      messages: []
    }
  }
  handleChange(evt){
    this.setState({
      input: evt.target.value
    })
  }
  handleKeyUp(evt){
    if(evt.keyCode === 13){
      let messagesCopy = this.state.messages.slice();
      messagesCopy.push(this.state.input);
      this.setState({
        messages: messagesCopy,
        input: ''
      })
    }
  }
  render() {
    return (
      <div className="chat-container">
        <h1>I'm the chat ui</h1>
        <Messages messages={this.state.messages}/>
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

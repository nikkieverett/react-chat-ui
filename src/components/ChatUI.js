import React from 'react';
import firebase from '../server/server.js';

import Messages from './Messages.js';

class ChatUI extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  componentDidMount(){
    return firebase.database().ref('/chat').update();

  }

  writeNewPost(username, message) {
  // A post entry.
    var messageData = {
      username: this.props.userName,
      message: this.state.input
    };

    // Get a key for a new Post.
    var newPostKey = firebase.database().ref('/chat/messages/').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/messages/' + newPostKey] = messageData;

    return firebase.database().ref('/chat').update(updates);
  }

  handleChange(evt){
    this.setState({
      input: evt.target.value
    })
  }
  handleKeyUp(evt){
    if(evt.keyCode === 13){
      this.writeNewPost(this.props.userName, this.state.input);
      this.setState({
        input: '',
      });
    }
  }
  render() {
    return (
      <div className="chat-container">
        <h1>I'm the chat ui</h1>
        <Messages messages={this.props.messages}/>
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

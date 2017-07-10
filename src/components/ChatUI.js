import React from 'react';
import firebase from '../server/server.js';

class ChatUI extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '',
      messages: []
    }
  }
  componentDidMount(){
    var ref = firebase.database().ref("messages");
    var messagesData = [];
    ref.on("value", function(snapshot) {
      var data = snapshot.val();
      for(var item in data){
        messagesData.push(data[item]);
      }
    });
    this.setState({
      messages: messagesData
    })
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
    var newMessage = [];
    if(evt.keyCode === 13){
      this.writeNewPost(this.props.userName, this.state.input);
      newMessage.push(this.state.input);
      this.handleSetMessages(newMessage);
      this.setState({
        input: '',
      });
    }
  }
  handleSetMessages(input){
    console.log('index page setting sate', input)
    this.setState({
      messages: input
    });
  }
  render() {
    let messages = this.state.messages.map((x, i) => {
      return(
        <div key={x + i} className="bubble">
          <span>{x.username}:</span> {x.message}
        </div>
      )
    });
    return (
      <div className="chat-container">
        <h1>I'm the chat ui</h1>
        <div>{messages}</div>
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

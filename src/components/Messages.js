import React from 'react';
import firebase from '../server/server.js';


class Messages extends React.Component{
  constructor(){
    super();
    this.state = {
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
  render() {
    let messages = this.state.messages.map((x, i) => {
      return(
        <div key={x + i} className="bubble">
          <span>{x.username}:</span> {x.message}
        </div>
      )
    })
    return (
      <div>{messages}</div>

    );
  }
}

export default Messages;

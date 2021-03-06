import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import firebase from './server/server.js';

import ChatUI from './components/ChatUI.js';
import LoginUI from './components/LoginUI.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userName: '',
      messages: []
    }
  }
  componentDidMount(){
    var ref = firebase.database().ref("/chat/messages");
    var messagesData = [];
    ref.on("child_added", function(snapshot) {
      var data = snapshot.val();
      messagesData.push(data);
    });
    this.loadMessages(messagesData);
  }
  loadMessages(data){
    this.setState({
      messages: data
    });
  }
  handleChange(userName){
    this.setState({
      userName: userName
    })
  }
  render() {
    return (
      <Router history={this.history}>
        <div className="page-container">
          <Route path="/chat" render={() => <ChatUI userName={this.state.userName} messages={this.state.messages}
          newMessage={(data) => this.newMessage(data)}/>}/>
          <Route exact path="/" render={() => <LoginUI onChange={(userName) => this.handleChange(userName)}/>}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

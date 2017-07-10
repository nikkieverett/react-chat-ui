import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import ChatUI from './components/ChatUI.js';
import LoginUI from './components/LoginUI.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userName: '',
    }
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
          <Route path="/chat" render={() => <ChatUI userName={this.state.userName}/>}/>
          <Route exact path="/" render={() => <LoginUI onChange={(userName) => this.handleChange(userName)}/>}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

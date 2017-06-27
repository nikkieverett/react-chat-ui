import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import ChatUI from './components/ChatUI.js';
import MessageList from './components/MessageList.js';
import LoginUI from './components/LoginUI.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <Route path="/chat" component={ChatUI}/>
          <Route path="/messages" component={MessageList}/>
          <Route exact path="/" component={LoginUI}/>
        </div>
      </Router>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

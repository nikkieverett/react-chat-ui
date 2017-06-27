import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import ChatRoom from './components/ChatRoom.js';
import Messages from './components/Messages.js';
import Login from './components/Login.js';

class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        <ChatRoom />
        <Messages />
        <Login />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';

class Input extends React.Component{
  render() {
    return (
      <div className="message-input">
        <input type="text" placeholder="type message here"></input>
      </div>
    );
  }
}

export default Input;

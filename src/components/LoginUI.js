import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class LoginUI extends React.Component{
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
  handleKeyUp(evt){
    if(evt.keyCode === 13){
      this.props.onChange(this.state.input);
      this.props.history.push('/chat')
    }
  }
  handleClick(){
    this.props.onChange(this.state.input);
  }
  render() {
    return (
      <div className="login-page-container">
        <h1>Who are you?</h1>
        <input
          type="text"
          placeholder="Your name"
          onChange={(evt) => this.handleChange(evt)}
          onKeyUp={(evt) => this.handleKeyUp(evt)} />
        <Link to="/chat"><button
          type="submit"
          onClick={() => this.handleClick()}>
          Start Chatting
        </button>
        </Link>
      </div>
    );
  }
}

export default withRouter(LoginUI);

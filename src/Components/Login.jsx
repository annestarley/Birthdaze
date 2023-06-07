import React, {Component, Fragment } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <Fragment>
        <div className='login' onClick={() => this.props.toHomepage()}>
            <h1>BIRTHDAZE</h1>
            <h2>AND OTHER EVENTS</h2>
            <p>Your personalized greetings and gifts reminder app.</p>
            <button>Login</button>
            <a href='#'>Sign up</a>
        </div>
      </Fragment>
    )
  }
}

export default Login;
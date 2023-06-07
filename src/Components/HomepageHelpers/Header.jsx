import React, {Component, Fragment } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='header'>
            <h1>Birthdaze</h1>
            <a href='#'>logout</a>
        </div>
      </Fragment>
    )
  }
}

export default Header;
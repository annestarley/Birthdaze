import React, {Component, Fragment } from 'react';

class MainGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: {
        login: true
      }
    }

    this.setConsole = this.setConsole.bind(this);
  }

  setConsole (e) {
    
  }

  render() {
    return (
      <Fragment>
        BIRTHDAZE
      </Fragment>
    )
  }
}

export default MainGame;
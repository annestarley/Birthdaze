import React, {Component, Fragment } from 'react';
import Login from './Login';
import Homepage from './Homepage';

class MainGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
        views: {
            login: true,
            homepage: false
        }
    }

    this.toHomepage = this.toHomepage.bind(this);
  }

  toHomepage () {
    let newState = this.state.views;
    newState.login = false;
    newState.homepage = true;
    this.setState({views: newState});
  }

  render() {
    return (
        <Fragment>
            {this.state.views.login ? <Login toHomepage={() =>this.toHomepage()}/> : ''}
            {this.state.views.homepage ? <Homepage /> : ''}
        </Fragment>
    )
  }
}

export default MainGame;
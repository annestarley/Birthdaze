import React, {Component, Fragment } from 'react';
import Header from './HomepageHelpers/Header';
import Add from './HomepageHelpers/Add';
import See from './HomepageHelpers/See';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dropdowns: {
            add: false,
            see: false
        }
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className='homepage'>
            <h3>Greetings! Would you like to...</h3>
            <button>Add New Event</button>
            {this.state.dropdowns.add ? <Add /> : ''}
            <button>See Upcoming Events</button>
            {this.state.dropdowns.see ? <See /> : ''}
        </div>
      </Fragment>
    )
  }
}

export default Homepage;
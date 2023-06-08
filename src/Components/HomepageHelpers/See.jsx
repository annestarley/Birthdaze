import React, {Component, Fragment } from 'react';

class See extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='see'>
            <p id='today'>View today's events</p>
            <p id='week'>View next week's events</p>
            <p id='month'>View next month's events</p>
            <p id='all'>View all events</p>
        </div>
      </Fragment>
    )
  }
}

export default See;
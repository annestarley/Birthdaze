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
            <p id='christmas'>Christmas</p>
            <p id='hannukah'>Hannukah</p>
            <p id='mothers-day'>Mother's Day</p>
            <p id='fathers-day'>Father's Day</p>
            <p id='other'>Other</p>
        </div>
      </Fragment>
    )
  }
}

export default See;
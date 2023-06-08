import React, {Component, Fragment } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='add'>
        <p className='title'>And new...</p>
            <div className='add-new'>
                <p id='birthday'>Birthday</p>
                <p id='anniversary'>Anniversary</p>
                <p id='other'>Other</p>
            </div>
            <p className='title'>Add to list...</p>
            <div className='add-to'>
                <p id='christmas'>Christmas</p>
                <p id='hannukah'>Hannukah</p>
                <p id='mothers-day'>Mother's Day</p>
                <p id='fathers-day'>Father's Day</p>
                <p id='other'>Other</p>
            </div>
        </div>
      </Fragment>
    )
  }
}

export default Add;
import React, {Component, Fragment } from 'react';

class OtherEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='event-info other-event'>
            <label htmlFor='event-name'>Event name:</label>
            <input type='text' placeholder="e.g. Grace's graduation" />
            <p>Does this event recur annually?</p>
            <input type='radio' id='yes' name='recur' value='yes' />
             <label for='yes'>yes</label>
             <input type='radio' id='yes' name='recur' value='no' />
             <label for='no'>no</label>
        </div>
      </Fragment>
    )
  }
}

export default OtherEvent;
import React, {Component, Fragment } from 'react';

class AddEvent1 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='add-event-1'>
            <h3>Great! Let's add some important info about this {this.props.event.type}.</h3>
        </div>
        <div className='back-next'>
            <button>Back</button>
            <button>Next</button>
        </div>
      </Fragment>
    )
  }
}

export default AddEvent1;
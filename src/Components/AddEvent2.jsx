import React, {Component, Fragment } from 'react';
import Header from './HomepageHelpers/Header';

class AddEvent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <Header setView={(e) => this.props.setView(e)}/>
        <h3>Add event 2</h3>
        {/* <div className='add-event-2'>
            <div className='event-info'>
                <label htmlFor="name">Name of person:</label>
                <input type="text" />
            </div>
            <div className='event-info'>
                <label htmlFor="date">Date of event:</label>
                <input type="date"></input>
            </div>
        </div> */}
        <div className='back-next'>
            <button onClick={(e) => this.props.setView('addEvent1')}>Back</button>
            <button>Next</button>
        </div>
      </Fragment>
    )
  }
}

export default AddEvent2;
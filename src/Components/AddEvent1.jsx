import React, {Component, Fragment } from 'react';
import Header from './HomepageHelpers/Header';

class AddEvent1 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <Header setView={(e) => this.props.setView(e)} />
        <h3>Great! Let's add some info about this {this.props.event.type}.</h3>
        <div className='add-event-1'>
            <div className='event-info'>
                <label htmlFor="name">Name of person:</label>
                <input type="text" />
            </div>
            <div className='event-info'>
                <label htmlFor="date">Date of event:</label>
                <input type="date"></input>
            </div>
        </div>
        <div className='back-next'>
            <button onClick={(e) => this.props.setView('homepage')}>Back</button>
            <button onClick={(e) => this.props.setView('addEvent2')}>Next</button>
        </div>
      </Fragment>
    )
  }
}

export default AddEvent1;
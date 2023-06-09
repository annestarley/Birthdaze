import React, {Component, Fragment } from 'react';
import Header from './HomepageHelpers/Header';
import OtherEvent from './AddEventHelpers/OtherEvent';

class AddEvent1 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <Header setView={(e) => this.props.setView(e)} />
        <h3>Great! Let's add some info about this {this.props.event.type === 'other' ? 'event' : this.props.event.type}.</h3>
        <div className='add-event-1'>
            {this.props.event.type === 'other' ? <OtherEvent /> : ''}
            <div className='event-info'>
                <label htmlFor='name'>Name of person:</label>
                <input type='text' />
            </div>
            <div className='event-info'>
                <label htmlFor='date'>Date of event:</label>
                <input type='date'></input>
            </div>
            <div className='event-info'>
                <p>When do you want a reminder for this event? Select all that apply.</p>
                <input type='checkbox' id='day' />
                <label for='day'> day of</label><br />
                <input type='checkbox' id='daybefore'/>
                <label for='daybefore'> day before</label><br />
                <input type='checkbox' id='week' />
                <label for='week'> a week in advance</label><br />
                <input type='checkbox' id='month' />
                <label for='month'> a month in advance</label><br />
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
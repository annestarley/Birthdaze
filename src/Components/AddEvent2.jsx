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
        <h3>Would you like gift suggestion for this {this.props.event.type === 'other' ? 'event' : this.props.event.type}?</h3>
        <div className='add-event-2'>
            <div className='event-info'>
                <input type='radio' id='yes' name='gift' value='yes' />
                 <label for='yes'>yes please</label>
                 <input type='radio' id='yes' name='gift' value='no' />
                 <label for='no'>no thank you</label>
            </div>
        </div>
        <div className='back-next'>
            <button onClick={(e) => this.props.setView('addEvent1')}>Back</button>
            <button>Next</button>
        </div>
      </Fragment>
    )
  }
}

export default AddEvent2;
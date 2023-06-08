import React, {Component, Fragment } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <div className='add' id='addEvent1'>
        <p className='title'>And new...</p>
            <div className='add-new' id='type'>
                <p id='birthday' onClick={(e) => this.props.editEvent(e)}>Birthday</p>
                <p id='anniversary' onClick={(e) => this.props.editEvent(e)}>Anniversary</p>
                <p id='other' onClick={(e) => this.props.editEvent(e)}>Other</p>
            </div>
            <p className='title' onClick={(e) => this.props.editEvent(e)}>Add to list...</p>
            <div className='add-to' id='type'>
                <p id='christmas' onClick={(e) => this.props.editEvent(e)}>Christmas</p>
                <p id='hannukah' onClick={(e) => this.props.editEvent(e)}>Hannukah</p>
                <p id='mothers-day' onClick={(e) => this.props.editEvent(e)}>Mother's Day</p>
                <p id='fathers-day' onClick={(e) => this.props.editEvent(e)}>Father's Day</p>
                <p id='otherList' onClick={(e) => this.props.editEvent(e)}>Other</p>
            </div>
        </div>
      </Fragment>
    )
  }
}

export default Add;
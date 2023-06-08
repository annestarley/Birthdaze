import React, {Component, Fragment } from 'react';
import Header from './HomepageHelpers/Header';
import Add from './HomepageHelpers/Add';
import See from './HomepageHelpers/See';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dropdowns: {
            add: false,
            see: false
        }
    }

    this.changeState = this.dropdown.bind(this);
  }

  dropdown (e) {
    let newState  = this.state.dropdowns;
    if (newState[e.target.className]) newState[e.target.className] = false;
    else newState[e.target.className] = true;
    this.setState({dropdowns: newState});

    //e.target.className.current.scrollIntoView();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className='homepage'>
            <h3>Greetings! Would you like to...</h3>
            <button className='add' onClick={((e) => this.dropdown(e))}>Add New Event</button>
            {this.state.dropdowns.add ? <Add event={this.props.event} editEvent={(e) => this.props.editEvent(e)} /> : ''}
            <button className='see' onClick={((e) => this.dropdown(e))}>See Upcoming Events</button>
            {this.state.dropdowns.see ? <See event={this.props.event} editEvent={(e) => this.props.editEvent(e)} /> : ''}
        </div>
      </Fragment>
    )
  }
}

export default Homepage;
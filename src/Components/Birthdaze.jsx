import React, {Component, Fragment } from 'react';
import Login from './Login';
import Homepage from './Homepage';
import AddEvent1 from './AddEvent1';

class MainGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
        views: {
            login: true,
            homepage: false,
            addEvent1: false
        },
        event: {
            type: null,
            name: null,
            person: null,
            date: null,
            age: null,
            gender: null,
            reminder: {
                dayOf: false,
                twoDays: false,
                oneWeek: false,
                twoWeeks: false,
                month: false
            },
            gift: {
                suggestion: false,
                low: null,
                high: null
            }
        }
    }

    this.toHomepage = this.toHomepage.bind(this);
    this.setView = this.setView.bind(this);
    this.editEvent = this.editEvent.bind(this);
  }

  toHomepage () {
    let newState = this.state.views;
    newState.login = false;
    newState.homepage = true;
    this.setState({views: newState});
  }

  setView(e) {
    let newView = this.state.views;
    let view = e.target.parentNode.parentNode.id
    for (const v in newView) {
        if (newView[v]) newView[v] = false;
    }
    newView[view] = true;
    this.setState({views: newView});

    console.log(this.state)
  }

  editEvent (e) {
    let parent = e.target.parentNode.id;
    let newState = this.state.event;
    newState[parent] = e.target.id
    this.setState({event: newState});

    this.setView(e)
  }

  render() {
    return (
        <Fragment>
            {this.state.views.login ? <Login toHomepage={() =>this.toHomepage()}/> : ''}
            {this.state.views.homepage ? <Homepage event={this.state.event} editEvent={(e) => this.editEvent(e)} /> : ''}
            {this.state.views.addEvent1 ? <AddEvent1 event={this.state.event} /> : ''}
        </Fragment>
    )
  }
}

export default MainGame;
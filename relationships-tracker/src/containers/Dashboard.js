import React, { useReducer } from 'react';
import {filterFutureEvents, filterPastEvents} from '../utils';
import Events from './Events';
import EventToggler from '../components/event/EventToggler'

// props: 
// events

const Dashboard = props => {
  const upcomingEvents = filterFutureEvents(props.events);
  const pastEvents = filterPastEvents(props.events);
  
  const initialState = {display: upcomingEvents};

  function reducer(state, action) {
    switch (action.type) {
      case 'past':
        return {display: pastEvents};
      case 'all':
        return {display: props.events};
      case 'upcoming':
        return initialState;
      default:
        throw new Error();
    }
  }
  
  function DisplayEvents() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleClick = (type) => dispatch({type});

    if (state.display) {
      return (
        <div>
          <EventToggler handleClick={handleClick}/>
          <Events events={state.display} />
        </div>
      )
    } else {
      return (
        <div>
          <EventToggler handleClick={handleClick} />
          <Events events={upcomingEvents} />
        </div>
      )
    }
  }
  
  return DisplayEvents();
}

export default Dashboard;
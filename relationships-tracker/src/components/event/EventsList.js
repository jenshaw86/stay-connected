import React from 'react';
import EventCard from './EventCard';

const Events = props => {
  // Show all Event Cards
  const displayAllEvents = () => {
    if (props.events && props.events.length !== 0 ) {
      return props.events.map(event => {
        return <EventCard 
          key={event.id} 
          event={event}
          setEvents={props.setEvents}
          viewEvent={props.viewEvent}
          path={props.path}
          {...props}
          />
      })
    }
  }

  return (
    <div>
      { displayAllEvents() }
    </div> 
  )
}

export default Events
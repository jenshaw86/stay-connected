import React from 'react';
import {Button, Container} from 'react-bootstrap'
import {Link, Route} from 'react-router-dom'
import EventsList from './EventsList';
import AddEventButton from './AddEventButton';

const EventDashboard = props => {
  
  const upcomingEvents = props.events.future_events; 
  const pastEvents = props.events.past_events;
  return (
    <Container className="events-container">
      <h2>Events</h2>

      <AddEventButton 
        userId={props.userId}  
        relationships={props.relationships} 
        viewRelationship={props.viewRelationship}
        updateRelationships={props.updateRelationships} 
        handleNewEvent={props.handleNewEvent} 
      />

        <div className="events-1">
          <Link to={"/events/past"}><Button className="event-btn past-btn">Past Events</Button></Link>
        </div>
        <div className="events-2">
          <Link to={"/events/upcoming"}><Button className="event-btn upcoming-btn">Upcoming Events</Button></Link>
        </div>
      
      <Route path={"/events/upcoming"} exact render={ (browserHistory) => <EventsList {...browserHistory} events={upcomingEvents} relationships={props.relationships} viewEvent={props.viewEvent} viewRelationship={props.viewRelationship} updateEvents={props.updateEvents} updateRelationships={props.updateRelationships} handleDeletedEvent={props.handleDeletedEvent}/> } />
      <Route path={"/events/past"} exact render={ (browserHistory) => <EventsList {...browserHistory} events={pastEvents} viewEvent={props.viewEvent} /> } />
    </Container>
  )

}

export default EventDashboard;
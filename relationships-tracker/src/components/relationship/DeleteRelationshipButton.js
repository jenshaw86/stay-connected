import React from 'react';
import {Button} from 'react-bootstrap'

const DeleteRelationshipButton = props => {
  // handle delete relationship
  const handleOnClick = () => {
    fetch(`http://localhost:3000/relationships/${props.relationship.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      props.setRelationships(data)
      deleteRelEvent()
    })
  }  

  const deleteRelEvent = () => {
    // clean up all events related to relationship
    // get all relationship events, delete
  }

  return (
    <Button onClick={handleOnClick}>Remove</Button>
  )
}

export default DeleteRelationshipButton;
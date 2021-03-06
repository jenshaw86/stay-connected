import React, { useState } from 'react'
import { Form, Button, ButtonToolbar, Modal } from "react-bootstrap";
// Form Components
import FirstName from '../form/FirstName';
import LastName from '../form/LastName';
import RelationshipType from './form_components/RelationshipType';
import Phone from '../form/Phone';
import Email from '../form/Email'
import Image from '../form/Image'
import ContactFrequency from './form_components/ContactFrequency'

import RelationshipSubmitButton from './RelationshipSubmitButton'

const RelationshipForm = props => {
  const [firstName, setFirstName] = useState(props.relationship ? props.relationship.first_name : '');
  const [lastName, setLastName] = useState(props.relationship ? props.relationship.last_name : '');
  const [relType, setRelType] = useState(props.relationship ? props.relationship.relationship_type : 'Friend');
  const [email, setEmail] = useState(props.relationship ? props.relationship.email : '');
  const [phone, setPhone] = useState(props.relationship ? props.relationship.phone_number : '');
  const [image, setImage] = useState(props.relationship ? props.relationship.image : '');
  const [currentInterval, setCurrentInterval] = useState(props.relationship ? props.relationship.contact_frequency : 7);

  return (
    
    <Form>
      <Modal.Body>
        {/* First, Last Name */}
        <Form.Row>
          <FirstName firstName={firstName} setFirstName={setFirstName} />
          <LastName lastName={lastName} setLastName={setLastName} />
        </Form.Row>

        {/* Relationship Type, Email, Phone, Image */}
        <RelationshipType relType={relType} setRelType={setRelType} />
        <Email email={email} setEmail={setEmail} />
        <Phone phone={phone} setPhone={setPhone} />
        <Image image={image} setImage={setImage} />
        {/* Notification Frequency */}
        <ContactFrequency currentInterval={currentInterval} setCurrentInterval={setCurrentInterval} />
      </Modal.Body>

      <Modal.Footer>
        {/* Close, Submit Buttons */}
        <ButtonToolbar>
          <Button variant="secondary" onClick={() => props.handleClose()}>
            Close
          </Button>
          <RelationshipSubmitButton {...props} firstName={firstName} lastName={lastName} relType={relType} email={email} phone={phone} image={image} contact_frequency={parseInt(currentInterval)} />
        </ButtonToolbar>
      </Modal.Footer>
    </Form>
  )
}

export default RelationshipForm;
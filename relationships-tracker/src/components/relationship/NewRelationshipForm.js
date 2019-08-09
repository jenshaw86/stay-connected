import React, {useState} from 'react'
import {Form, Col} from "react-bootstrap";

import FirstName from './form_components/FirstName';
import LastName from './form_components/LastName';
import RelationshipType from './form_components/RelationshipType';
import Phone from './form_components/Phone';
import Email from './form_components/Email'
import ContactFrequency from './form_components/ContactFrequency'

const NewRelationshipForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [relType, setRelType] = useState("Friend");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interval, setInterval] = useState(1);
  const [measure, setMeasure] = useState("day")

  return (
    <Form>
      {/* First */}
      <Form.Row>
        <FirstName firstName={firstName} setFirstName={setFirstName} />
        <LastName lastName={lastName} setLastName={setLastName} />
      </Form.Row>

      <RelationshipType relType={relType} setRelType={setRelType} />
      <Email email={email} setEmail={setEmail} />
      <Phone phone={phone} setPhone={setPhone} />
      
      {/* Notification Frequency */}
      <Form.Row>
        <ContactFrequency interval={interval} setInterval={setInterval} measure={measure} />
        <ContactMeasure measure={measure} setMeasure={setMeasure} />
      </Form.Row>
      
      <Form.Group>
        <Form.Check type="checkbox" label="Send me reminders to connect" />
      </Form.Group>

      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
  )
}

export default NewRelationshipForm
import React from 'react'
import {Form, Col} from "react-bootstrap";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { subDays } from 'date-fns';

const StartDateTime = props => {
  return (
    <>
    <Form.Row>
      <Form.Group as={Col}>
        <Form.Label>Start Date</Form.Label>
        <DatePicker 
          selected={props.startDate} 
          onChange={date => {
            props.setStartDate(date)} 
          }
          minDate={subDays(new Date(), 0)}
          />
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>Start Time</Form.Label>
        <DatePicker
          selected={props.startDate}       
          onChange={time => props.setStartDate(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          dateFormat="h:mm aa" //hour, minute, am/pm
          timeCaption="Time"
        />
      </Form.Group>
    </Form.Row>
        </>
  )
}

export default StartDateTime;
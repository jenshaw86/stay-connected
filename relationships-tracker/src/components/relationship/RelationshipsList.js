import React, {useState, Component} from "react";
import RelationshipCard from "./RelationshipCard";
import AddRelationshipButton from './AddRelationshipButton'
import {Container, Form} from 'react-bootstrap'

class RelationshipsList extends Component {
  constructor() {
    super()
    this.state = {
      listOrder: []
    }
  }

  componentDidMount() {
    this.setState({listOrder: this.props.relationships.sort((a,b) => a.first_name < b.first_name ? -1 : 1)})
  }
  
  handleChange = val => {
    let newOrder = this.state.listOrder;
    switch(val) {
      case "first_az":
        newOrder = this.state.listOrder.sort((a,b) => a.first_name < b.first_name ? -1 : 1);
        break;
      case "first_za":
        newOrder = this.state.listOrder.sort((a,b) => a.first_name > b.first_name ? -1 : 1)
        break;
      case "last_az":
        newOrder = (this.state.listOrder.sort((a,b) => a.last_name < b.last_name ? -1 : 1))
        break;
      case "last_za":
        newOrder = (this.state.listOrder.sort((a,b) => a.last_name > b.last_name ? -1 : 1))
        break;
      case "most_recent":
        break;
      case "least_recent":
        break;
      case "most_freq":
        newOrder = (this.state.listOrder.sort((a,b) => b.events.length - a.events.length))
        break;
      case "least_freq":
        newOrder = (this.state.listOrder.sort((a,b) => a.events.length - b.events.length))
        break;
      default:
        break;
    }
    this.setState({listOrder: newOrder})
  }

  displayFilter = () => {
    return(
      <div>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Order by:</Form.Label>
            <Form.Control as="select"
            onChange={ev => {
              this.handleChange(ev.target.value)
            }}>
              <option value="first_az">First Name Alphabetically A-Z</option>
              <option value="first_za">First Name Alphabetically Z-A</option>
              <option value="last_az">Last Name Alphabetically A-Z</option>
              <option value="last_za">Last Name Alphabetically Z-A</option>
              <option value="most_recent">Most Recently</option>
              <option value="least_recent">Least Recently</option>
              <option value="most_freq">Most Frequently</option>
              <option value="least_freq">Least Frequently</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    )
  }
  
  // show all relationships
  displayRelationships = () => {
    return this.state.listOrder.map(rel => {
      return (
        <RelationshipCard
          key={rel.id}
          relationship={rel}
          viewRelationship={this.props.viewRelationship}
          updateRelationships={this.props.updateRelationships}
          updateEvents={this.props.updateEvents}
        />
      );
    });
  }

  // display page
  displayRelationshipsPage = () => {
    if (this.props.relationships && this.props.relationships.length !== 0) {
      return (
        <div>
          {this.displayFilter()}
          <AddRelationshipButton handleNewRelationship={this.props.handleNewRelationship} />
          {this.displayRelationships()}
        </div>
      )
    } else if (this.props.relationships && this.props.relationships.length === 0) {
      return (
        <div>
          <h4>You're not tracking any relationships!</h4>
          <AddRelationshipButton handleNewRelationship={this.props.handleNewRelationship}/>
        </div>
      )
    }
  };

  render() {
    return (
      <Container>
        <h3>You're keeping track of {this.props.relationships.length} people</h3>
        {this.displayRelationshipsPage()}    
      </Container>
    );

  }
  

  

  

  

};

// const RelationshipsList = props => {
//   const [listOrder, setListOrder] = useState(props.relationships.sort((a,b) => a.first_name < b.first_name ? -1 : 1))
  
//   const handleChange = val => {
//     let newOrder = listOrder;
//     switch(val) {
//       case "first_az":
//         newOrder = listOrder.sort((a,b) => a.first_name < b.first_name ? -1 : 1);
//         break;
//       case "first_za":
//         newOrder = listOrder.sort((a,b) => a.first_name > b.first_name ? -1 : 1)
//         break;
//       case "last_az":
//         setListOrder(listOrder.sort((a,b) => a.last_name < b.last_name ? -1 : 1))
//         break;
//       case "last_za":
//         setListOrder(listOrder.sort((a,b) => a.last_name > b.last_name ? -1 : 1))
//         break;
//       case "most_recent":
//         break;
//       case "least_recent":
//         break;
//       case "most_freq":
//         setListOrder(listOrder.sort((a,b) => b.events.length - a.events.length))
//         break;
//       case "least_freq":
//         setListOrder(listOrder.sort((a,b) => a.events.length - b.events.length))
//         break;
//       default:
//         break;
//     }
//     setListOrder(newOrder)
//     console.log(listOrder)
//   }

//   const displayFilter = () => {
//     return(
//       <div>
//         <Form>
//           <Form.Group controlId="exampleForm.ControlSelect1">
//             <Form.Label>Order by:</Form.Label>
//             <Form.Control as="select"
//             onChange={ev => {
//               handleChange(ev.target.value)
//             }}>
//               <option value="first_az">First Name Alphabetically A-Z</option>
//               <option value="first_za">First Name Alphabetically Z-A</option>
//               <option value="last_za">Last Name Alphabetically A-Z</option>
//               <option value="last_za">Last Name Alphabetically Z-A</option>
//               <option value="most_recent">Most Recently</option>
//               <option value="least_recent">Least Recently</option>
//               <option value="most_freq">Most Frequently</option>
//               <option value="least_freq">Least Frequently</option>
//             </Form.Control>
//           </Form.Group>
//         </Form>
//       </div>
//     )
//   }

//   // show all relationships
//   const displayRelationships = () => {
//     return listOrder.map(rel => {
//       return (
//         <RelationshipCard
//           key={rel.id}
//           relationship={rel}
//           viewRelationship={props.viewRelationship}
//           updateRelationships={props.updateRelationships}
//           updateEvents={props.updateEvents}
//         />
//       );
//     });
//   }

//   // display page
//   const displayRelationshipsPage = () => {
//     if (props.relationships && props.relationships.length !== 0) {
//       return (
//         <div>
//           {displayFilter()}
//           <AddRelationshipButton handleNewRelationship={props.handleNewRelationship} />
//           {displayRelationships()}
//         </div>
//       )
//     } else if (props.relationships && props.relationships.length === 0) {
//       return (
//         <div>
//           <h4>You're not tracking any relationships!</h4>
//           <AddRelationshipButton handleNewRelationship={props.handleNewRelationship}/>
//         </div>
//       )
//     }
//   };

//   return (
//     <Container>
//       <h3>You're keeping track of {props.relationships.length} people</h3>
//       {displayRelationshipsPage()}    
//     </Container>
//   );
// };

export default RelationshipsList;

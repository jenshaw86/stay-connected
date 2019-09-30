const API_ROOT = `http://localhost:3000/api/v1`;

const auth_headers = token => {
  return ({
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}` 
    }
  })
} 

// Upon user signup, create a new user
export const signup = formData => {
  return (
    fetch(`${API_ROOT}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      }, 
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
  )
}

// login creates a new authorization (POST), 
// returns json object constaining authorized user and jwt
const login = formData => {
  console.log("logging in")
  return (
    fetch(`${API_ROOT}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      }, 
      body: JSON.stringify(formData)
    }) 
    .then(res => res.json())
  )
}

// getCurrentUser fetches (GET) the user that was authorized
// return json object containing user id and email
const getCurrentUser = token => {
  return (
    fetch(`${API_ROOT}/current_user`, auth_headers(token))
    .then(res => res.json())
  )
}

// getRelationships fetches authorized user's relationships and sets app's relationships state
const getRelationships = (token, handleSetState) => {
  console.log('getting relationships')
  return (
    fetch(`${API_ROOT}/relationships`, auth_headers(token))
    .then(res => res.json())
    .then(data => handleSetState(data))
  )
}

// getEvents fetches authorized user's events and sets app's events state
const getEvents = (token, handleSetState) => {
  console.log('getting events')
  return (
    fetch(`${API_ROOT}/events`, auth_headers(token))
    .then(res => res.json())
    .then(data => handleSetState(data))
  )
}

const newRelationship = (props) => {
  let token = localStorage.getItem('token')
  fetch(`${API_ROOT}/relationships`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`

    }, 
    body: JSON.stringify({
      first_name: props.firstName,
      last_name: props.lastName,
      relationship_type: props.relType,
      image: props.image,
      email: props.email,
      phone_number: props.phone,
      contact_frequency: props.contact_frequency,
      user_id: props.userId
    })
  })
  .then(res => res.json())
  .then(newPerson => props.handleNewRelationship(newPerson))
}

export const api = {
  auth: {
    login,
    getCurrentUser
  },
  data: {
    getRelationships,
    getEvents
  }, 
  post: {
    newRelationship
  }
}
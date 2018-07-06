import React from 'react';
import WorkoutCreate from './WorkoutCreate';
import WorkoutEdit from './WorkoutEdit';
import { Container, Row, Col } from 'reactstrap';
import WorkoutsTable from './WorkoutsTable';
import APIURL from '../helpers/enviroment'

class WorkoutIndex extends React.Component {

constructor(props) {
    super(props)
    this.state = {
        workouts: [],
        updatePressed: false, 
        workoutToUpdate: {} 
    }
    }

  componentWillMount() {
    this.fetchWorkouts()
  }

  fetchWorkouts = () => {
    fetch(`${APIURL}/authtest/getall`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => res.json())
      .then((logData) => {
        return this.setState({ workouts: logData })
      })
  }
workoutDelete = (event) => { 
fetch(`${APIURL}/authtest/delete/${event.target.id}`, {
    method: 'DELETE', 
    body: JSON.stringify({ log: { id: event.target.id } }), 
    headers: new Headers({
    'Content-Type': 'application/json',
    'Authorization': this.props.token 
    })
})
    .then((res) => this.fetchWorkouts()) 
}
workoutUpdate = (event, workout) => { 
    fetch(`${APIURL}/authtest/update/${workout.id}`, {
        
        method: 'PUT', 
        body: JSON.stringify({ log: workout }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token 
        })
    })
        .then((res) => {
            this.setState({ updatePressed: false }) 
            this.fetchWorkouts(); 
        })
}
setUpdatedWorkout = (event, workout) => {
    this.setState({
        workoutToUpdate: workout, 
        updatePressed: true 
    })
}
render() {
    const workouts = this.state.workouts.length >= 1 ?
      <WorkoutsTable workouts={this.state.workouts} delete={this.workoutDelete} update={this.setUpdatedWorkout} /> :
      <h2>Log a session to see table</h2>
    return (
    <Container>
        <Row>
        <Col md="3">
            <WorkoutCreate token={this.props.token} updateWorkoutsArray={this.fetchWorkouts} />
        </Col>
        <Col md="9">
            {workouts}
        </Col>
        </Row>
        {/* adding edit */}
        <Col md="12">  
        {
           
            this.state.updatePressed ? <WorkoutEdit t={this.state.updatePressed} update={this.workoutUpdate} workout={this.state.workoutToUpdate} />
            : <div></div>
        }
        </Col>
    </Container>
    )
  }
}

export default WorkoutIndex
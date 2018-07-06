import React from 'react';
import TournamentCreate from './tournamentCreate';
import TournamentEdit from './tournamentEdit';
import { Container, Row, Col } from 'reactstrap';
import TournamentTable from './tournamentTable';
import APIURL from '../helpers/enviroment'

class TournamentIndex extends React.Component {

constructor(props) {
    super(props)
    this.state = {
        tournament: [],
        updatePressed: false, 
        tournamentToUpdate: {} 
    }
    }

  componentWillMount() {
    this.fetchTournament()
  }

  fetchTournament = () => {
    fetch(`${APIURL}/tournament/getall`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => res.json())
      .then((logData) => {
        return this.setState({ tournament: logData })
      })
  }
tournamentDelete = (event) => { 
fetch(`${APIURL}/tournament/delete/${event.target.id}`, {
    method: 'DELETE', 
    body: JSON.stringify({ log: { id: event.target.id } }), 
    headers: new Headers({
    'Content-Type': 'application/json',
    'Authorization': this.props.token 
    })
})
    .then((res) => this.fetchTournament()) 
}
tournamentUpdate = (event, tournament) => { 
    fetch(`${APIURL}/tournament/update/${tournament.id}`, {
        
        method: 'PUT', 
        body: JSON.stringify({ log: tournament }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token 
        })
    })
        .then((res) => {
            this.setState({ updatePressed: false }) 
            this.fetchTournament(); 
        })
}
setUpdatedTournament = (event, tournament) => {
    this.setState({
        tournamentToUpdate: tournament, 
        updatePressed: true 
    })
}
render() {
    const tournament = this.state.tournament.length >= 1 ?
      <TournamentTable tournament={this.state.tournament} delete={this.tournamentDelete} update={this.setUpdatedTournament} /> :
      <h2>Log a session to see table</h2>
    return (
    <Container>
        <Row>
        <Col md="3">
            <TournamentCreate token={this.props.token} updateTournamentArray={this.fetchTournament} />
        </Col>
        <Col md="9">
            {tournament}
        </Col>
        </Row>
        {/* adding edit */}
        <Col md="12">  
        {
           
            this.state.updatePressed ? <TournamentEdit t={this.state.updatePressed} update={this.tournamentUpdate} tournament={this.state.tournamentToUpdate} />
            : <div></div>
        }
        </Col>
    </Container>
    )
  }
}

export default TournamentIndex;
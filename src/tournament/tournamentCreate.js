import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/enviroment';


class TournamentCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            game: '',
            buyIn: '',
            finish: ''
        };
    }

    handleChange = (event) => {
        // try console.log(event) to see when this method will be invoked
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/tournament/create`, {
            
            method: 'POST',
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                // after we create a log we want to pull that data from the server.
                this.props.updateTournamentArray()
                this.setState({
                    id: '',
                    game: '',
                    buyIn: '',
                    finish: ''
                })
            })
    }

    render() {
        return (
            <div>
                <h3>Log a Poker Session</h3>
                <hr />
                {/* after the form is submitted the data gets sent to the method above*/}
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="game">Game</Label>
                        <Input id="game" type="select" name="game" value={this.state.game} onChange={this.handleChange}>
                            <option>Select a Game</option>
                            <option value="Holdem">Holdem</option>
                            <option value="Omaha">Omaha</option>
                            <option value="Stud">Stud</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="buyIn">Buy In</Label>
                        <Input type="select" name="buyIn" id="buyIn" value={this.state.buyIn} onChange={this.handleChange} placeholder="Type">
                            <option>Select Buy In</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="500">500</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="finish">Placement</Label>
                        <Input type="select" name="finish" value={this.state.finish} onChange={this.handleChange}>
                        <option>Where did you finish?</option>
                            <option value="1st">1st</option>
                            <option value="2nd">2nd</option>
                            <option value="Did not finish">Did not finish</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default TournamentCreate;
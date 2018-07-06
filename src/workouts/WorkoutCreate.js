import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/enviroment';


class WorkoutCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            result: '',
            description: '',
            def: ''
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
        fetch(`${APIURL}/authtest/create`, {
            
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
                this.props.updateWorkoutsArray()
                this.setState({
                    id: '',
                    result: '',
                    description: '',
                    def: ''
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
                        <Label for="result">Game</Label>
                        <Input id="result" type="select" name="result" value={this.state.result} onChange={this.handleChange}>
                            <option>Select a Game</option>
                            <option value="Holdem">Holdem</option>
                            <option value="Omaha">Omaha</option>
                            <option value="Stud">Stud</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="def">Limit</Label>
                        <Input type="select" name="def" id="def" value={this.state.def} onChange={this.handleChange} placeholder="Type">
                            <option>Select a Stake</option>
                            <option value="Low Limit">Low Limit</option>
                            <option value="Medium Limit">Medium Limit</option>
                            <option value="High Limit">High Limit</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Notes</Label>
                        <Input id="description" type="text" name="description" value={this.state.description} placeholder="How did you do?" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default WorkoutCreate;
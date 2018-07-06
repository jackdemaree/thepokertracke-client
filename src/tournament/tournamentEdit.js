import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class TournamentEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            game: '',
            buyIn: '',
            finish: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.tournament.id,
            game: this.props.tournament.game,
            buyIn: this.props.tournament.buyIn,
            finish: this.props.tournament.finish
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Edit Entry</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="result">Game</Label>
                        <Input id="result" type="select" name="result" value={this.state.result} onChange={this.handleChange}>
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
                    </ModalBody>

                </Modal>

            </div>
        )
    }
}

export default TournamentEdit;
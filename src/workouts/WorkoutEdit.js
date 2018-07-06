import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class WorkoutEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            result: '',
            description: '',
            def: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.workout.id,
            result: this.props.workout.result,
            description: this.props.workout.description,
            def: this.props.workout.def
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
                                <Input id="description" type="text" name="description" value={this.state.description} placeholder="enter description" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>

                </Modal>

            </div>
        )
    }
}

export default WorkoutEdit;
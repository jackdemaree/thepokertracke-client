import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/enviroment'

class Signup extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            username: '', 
            password: '',
            email:''
            //ask kenn *******y
            
        };
    }
handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
}
handleSubmit = (event) => {
 
    fetch(`${APIURL}/api/user/createuser`, {
        method: 'POST', 
        body: JSON.stringify({user:this.state}), 
        headers: new Headers({
            'Content-Type': 'application/json' 
        })
    }).then(
        (response) => response.json() 
    ).then((data) => {
        this.props.setToken(data.sessionToken) 
    }) 
    event.preventDefault()
}
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Create a username and start keeping track of your poker sessions today!</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="su_email" type="email" name="email" placeholder="enter email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Signup;
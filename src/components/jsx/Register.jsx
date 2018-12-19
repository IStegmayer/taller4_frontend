import React, { Component } from 'react';
import { Grid, Form, FormGroup, Col, FormControl, Button, ControlLabel, HelpBlock } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import '../css/register.css'

const initialState = {
    usernameValidation: null,
    emailValidation: null,
    passwordValidation: null,
    emailHelpBlock: '',
    usernameHelpBlock: '',
    passwordHelpBlock: '',
    redirect: false
};

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = initialState;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        const data = new FormData();
        let form = e.target
        data.append('username', form.elements.username.value);
        data.append('email', form.elements.email.value);
        data.append('pw', form.elements.pw.value);
        
        if (form.elements.pw.value !== form.elements.pw2.value){
            this.setState(initialState);
            let newState = {};
            newState['passwordValidation'] = 'error';
            newState['passwordHelpBlock'] = 'Passwords don\'t match';
            this.setState(newState);
        } else {fetch('http://127.0.0.1:5000/api/validate-register', {
                    method: 'POST',
                    body: data,
                }).then(response => response.json())
                    .then(response => 
                    {
                        this.setState(initialState);
                        if (response['error']){
                            let newState = {};
                            if (response['error'] === 'usernameValidation'){
                                newState['usernameHelpBlock'] = response['feedback'];
                            } else if (response['error'] === 'emailValidation'){
                                newState['emailHelpBlock'] = response['feedback'];
                            }
                            newState[response['error']] = 'error';
                            this.setState(newState);
                        } else {
                            fetch('http://127.0.0.1:5000/api/register', {
                                method: 'POST',
                                body: data,
                            }).then(response => response.json())
                                .then(response => 
                                    {
                                        this.setState({
                                            redirect: true,
                                            registered: 'true'
                                        });
                                    }
                                );
                        };
                    })
                    .catch(error => console.error('Error:', error));
                };
    }


    render() {

        if (this.state.redirect === true){
            return (<Redirect to={{ pathname:'/login', state: { referrer: this.state.registered }  }}/>)
        }

        return (
            <Grid>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalUsername" validationState={this.state.usernameValidation}>
                        <Col className="registerForm" componentClass={ControlLabel} xs={3} sm={4}>
                            Username
                        </Col>
                        <Col xs={9} sm={4}>
                            <FormControl type="text" name="username" placeholder="Username" maxLength="30" minLength="6"  />
                            <FormControl.Feedback />
                            <HelpBlock>{this.state.usernameHelpBlock}</HelpBlock>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail" validationState={this.state.emailValidation}>
                        <Col className="registerForm" componentClass={ControlLabel} xs={3} sm={4}>
                            Email
                        </Col>
                        <Col xs={9} sm={4}>
                            <FormControl type="email" placeholder="Email" name="email" maxLength="45" minLength="10"/>
                            <FormControl.Feedback />
                            <HelpBlock>{this.state.emailHelpBlock}</HelpBlock>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword" validationState={this.state.passwordValidation}>
                        <Col className="registerForm" componentClass={ControlLabel} xs={3} sm={4}>
                            Password
                        </Col>
                        <Col xs={9} sm={4}>
                            <FormControl type="password" placeholder="Password" name="pw" maxLength="30" minLength="6"/>
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword2" validationState={this.state.passwordValidation}>
                        <Col className="registerForm" componentClass={ControlLabel} xs={3} sm={4}>
                            Confirm password 
                        </Col>
                        <Col xs={9} sm={4}>
                            <FormControl type="password" placeholder="Confirm password" name="pw2" maxLength="30" minLength="6"/>
                            <FormControl.Feedback />
                            <HelpBlock>{this.state.passwordHelpBlock}</HelpBlock>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col xsOffset={3} xs={3} smOffset={4} sm={3}>
                            <Button type="submit">Register</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Grid>
        )
    }

}

import React, { Component } from 'react';
import { Grid, Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { Redirect } from 'react-router-dom'
import '../css/login.css'
import AlertMsg from './AlertMsg';
import auth from './auth';

export default class Login extends Component {
    static propTypes = {
      cookies: instanceOf(Cookies).isRequired
    };
  
    constructor(props){
        super(props);
        const { cookies } = props;
        this.state ={
            registered: 'false',
            inputError: 'false'
        }

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if (this.props.location.state !== undefined) {
            this.setState(() => ({
                registered: 'true'
            }));
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { cookies } = this.props;
        const data = new FormData();
        let form = e.target
        data.append('username', form.elements.username.value);
        data.append('pw', form.elements.pw.value);
        
        console.log(this);

        return auth.login(data).then(response => {

            // console.log(response);
            if (response === true){
                this.props.setLoggedIn();
                cookies.set('userName', form.elements.username.value);
                this.props.history.push('/home');
            } else {
                console.log(response);
                this.setState({
                    inputError: 'true'
                });
            }

        });
        

    }



    render() {
        return (
            <Grid>
                <AlertMsg show={this.state.registered} style='success' msg='User registered successfully.'></AlertMsg>
                <AlertMsg show={this.state.inputError} style='danger' msg='Invalid username or password.'></AlertMsg>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalUsername">
                        <Col className="loginForm" componentClass={ControlLabel} xs={3} sm={4}>
                            Username
                        </Col>
                        <Col xs={9} sm={4}>
                            <FormControl type="text" name="username" placeholder="Username" maxLength="30"  />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col className="loginForm" componentClass={ControlLabel} xs={3} sm={4}>
                            Password
                        </Col>
                        <Col xs={9} sm={4}>
                            <FormControl type="password" placeholder="Password" name="pw" maxLength="30"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col xsOffset={3} xs={3} smOffset={4} sm={3}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Grid>
        )
    }

}









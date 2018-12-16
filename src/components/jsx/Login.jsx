import React, { Component } from 'react';
import { Link } from 'react';
import { Grid, Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap';


export default class Login extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     user: {
        //         username: '',
        //         password: ''
        //     }
        // }

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this)
    }

    // handleChange(e) {
    //     this.setState({
    //         user: {
    //             username: e.target.value,
    //             pw: e.target.value
                
    //         }
    //     })
    // }

    handleSubmit(e){
        let form = e.target
        // this.setState((state) => {
        //     return {
        //         user: {
        //             username: form.elements.username.value,
        //             password: form.elements.pw.value
        //         }
        //     };
        // });
        console.log(form.elements.username.value);
        console.log(form.elements.pw.value);
        // {{API: enviar los datos para loggearse}}
        e.preventDefault();
    }


    render() {
        return (
            <Grid>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalUsername">
                        <Col componentClass={ControlLabel} xs={3} sm={4}>
                            Username
                        </Col>
                        <Col xs={9} sm={4}>
                            <FormControl type="text" name="username" placeholder="Username" maxLength="30"  />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} xs={3} sm={4}>
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









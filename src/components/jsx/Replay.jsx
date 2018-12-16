import React, { Component } from 'react';
import { Link } from 'react';
import { Grid, Form, FormGroup, Col, FormControl, Button, ToggleButton, ButtonToolbar, ToggleButtonGroup, ControlLabel } from 'react-bootstrap';


export default class Home extends Component {

    static defaultProps = {
      categories: ['Goal', 'Teamplay', 'FullGame', 'Save']
    } 

    constructor(props){
        super(props);
        this.state = {}

    }


    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <ToggleButton key={category} value={category} onChange={this.handleChange}>{category}</ToggleButton>
        });

        return (
            <li>
                asd
            </li>
        )
    }

}


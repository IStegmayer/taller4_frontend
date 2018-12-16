import React, { Component } from 'react';
import { Link } from 'react';
import { Grid, Form, FormGroup, Col, FormControl, Button, ToggleButton, ButtonToolbar, ToggleButtonGroup, ControlLabel } from 'react-bootstrap';


export default class Upload extends Component {

    static defaultProps = {
      categories: ['Goal', 'Teamplay', 'FullGame', 'Save']
    } 

    constructor(props){
        super(props);
        this.state = {
            toggle: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(e){
        e.preventDefault();
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('toggle', this.state.toggle);
        data.append('desc', this.descInput.value);
        

        fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            body: data,
          })

        // {{API: enviar el filerino}}
    }

    handleChange(e){
        let group = e.target;
        this.setState({toggle: group.value});
        console.log(group.value);
    }


    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <ToggleButton key={category} value={category} onChange={this.handleChange}>{category}</ToggleButton>
        });

        return (
            <Grid>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalUsername">
                        <Col componentClass={ControlLabel} xs={3} sm={4}>
                            File
                        </Col>
                        <Col xs={9} sm={4}>
                            <FormControl type="file" inputRef={(ref) => { this.uploadInput = ref; }} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalCategories">
                        <Col componentClass={ControlLabel} xs={3} sm={4}>
                            Category
                        </Col>
                        <Col xs={9} sm={4}>
                        <ButtonToolbar >
                                <ToggleButtonGroup name="toggleButtons" type="radio">
                                    {categoryOptions}
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} xs={3} sm={4}>
                            Description
                        </Col>
                        <Col xs={9} sm={4}>
                            <FormControl componentClass="textarea" inputRef={ref => { this.descInput = ref; }} placeholder="Write a short description..." maxLength="80"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col xsOffset={3} xs={3} smOffset={4} sm={3}>
                            <Button type="submit">Upload</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Grid>
        )
    }

}



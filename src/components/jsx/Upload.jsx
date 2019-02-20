import React, { Component } from 'react';
import { Grid, Form, FormGroup, Col, FormControl, Button, ToggleButton, ButtonToolbar, ToggleButtonGroup, ControlLabel } from 'react-bootstrap';
import AlertMsg from './AlertMsg';
import '../css/upload.css'


export default class Upload extends Component {

    static defaultProps = {
      categories: ['Goal', 'Teamplay', 'FullGame', 'Save']
    } 

    constructor(props){
        super(props);
        this.state = {
            toggle: '',
            uploaded: 'false',
            errorAlert: 'false',
            errorMessage: ''
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
        data.append('username', this.props.userName);
        
        if (this.state.toggle === ''){
            this.setState(() =>({
                uploaded: 'false',
                errorAlert: 'true',
                errorMessage: 'Select category.'
            }));
            return
        }

        fetch('http://127.0.0.1:5000/api/upload', {
            method: 'POST',
            body: data,
          }).then(response => response.json())
          .then(response => 
            {
                if (response['errorMessage']){
                    this.setState(() =>({
                        uploaded: 'false',
                        errorAlert: 'true',
                        errorMessage: response['errorMessage']
                    }));
                } else {
                    this.setState(() =>({
                        uploaded: 'true',
                        errorAlert: 'false',
                        errorMessage: ''
                    }));
                }
            })
    }

    handleChange(e){
        let group = e.target;
        this.setState({toggle: group.value});
    }


    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <ToggleButton key={category} value={category} onChange={this.handleChange}>{category}</ToggleButton>
        });

        var required = true;

        return (
            <Grid>
                <AlertMsg show={this.state.uploaded} style='success' msg='File uploaded successfully.'></AlertMsg>
                <AlertMsg show={this.state.errorAlert} style='danger' msg={this.state.errorMessage}></AlertMsg>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalUsername">
                        <Col className="uploadForm"  componentClass={ControlLabel} xs={3} sm={4} >
                            File
                        </Col>
                        <Col xs={9} sm={4}>
                            <FormControl type="file" inputRef={(ref) => { this.uploadInput = ref; }} accept=".replay"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalCategories">
                        <Col className="uploadForm" componentClass={ControlLabel} xs={3} sm={4}>
                            Category
                        </Col>
                        <Col xs={9} sm={4}>
                        <ButtonToolbar >
                            <ToggleButtonGroup name="toggleButtons" type="radio" required={required} >
                                {categoryOptions}
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col className="uploadForm" componentClass={ControlLabel} xs={3} sm={4}>
                            Description
                        </Col>
                        <Col xs={9} sm={4}>
                            <FormControl componentClass="textarea" inputRef={ref => { this.descInput = ref; }} placeholder="Write a short description..." maxLength="80" minLength="10"/>
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



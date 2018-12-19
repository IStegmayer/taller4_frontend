import React, { Component } from 'react';
import { Col, Alert, Row } from 'react-bootstrap';


export default class AlertMsg extends Component {

    constructor(props){
        super(props);

    }

    render(){
        if (this.props.show === 'true'){
            return <Row>
                        <Col xs={9} sm={5} smOffset={3}>
                            <Alert bsStyle={this.props.style}>
                                {this.props.msg}
                            </Alert>
                        </Col>
                    </Row>
        } else {
            return '';
        }
    }
}
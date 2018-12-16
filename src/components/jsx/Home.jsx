import React, { Component } from 'react';
import { Link } from 'react';
import { Grid, Form, FormGroup, Col, FormControl, Button, ToggleButton, ButtonToolbar, ToggleButtonGroup, ControlLabel, ListGroupItem, ListGroup } from 'react-bootstrap';
import '../css/replay.css'

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
            <Grid>
                <h1>Welcome!</h1>
                <Col sm={12}>
                    <ListGroup>
                        <Col sm={12}>
                        <ListGroupItem>
                            <div className="rows">
                                <div className="rowerino likedPanel">
                                    <div className="internoDiv">
                                        <span>aa</span>
                                    </div>
                                    <div className="internoDiv">
                                        <span>aa</span>
                                    </div>
                                    <div className="internoDiv">
                                        <span>aa</span>
                                    </div>
                                </div>
                                <div className="rowerino ">
                                    <h4>NOMBRE DEL REPLAY</h4>
                                    <p className="postedBy">Posted by Userino tantos days ago</p>
                                    <p>aaaaaa a a a a a a a a a a a  a a a a a  a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a  a aa </p>
                                    <p className="taggerino">Goal</p>
                                </div>
                            </div>
                        </ListGroupItem>
                        </Col>
                        <Col sm={12}>
                        <ListGroupItem header="Heading 2" href="#">
                            Linked item
                        </ListGroupItem>
                        </Col>
                        <Col sm={12}>
                        <ListGroupItem header="Heading 3" bsStyle="primary">
                            Danger styling
                        </ListGroupItem>
                        </Col>
                    </ListGroup>
                </Col>
            </Grid>
        )
    }

}



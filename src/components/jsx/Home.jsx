import React, { Component } from 'react';
import { Grid, Col,} from 'react-bootstrap';
import '../css/home.css'
import Replay from './Replay';


export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            replays: [
                {
                    name: 'a',
                    authorName: 'aa',
                    timeStamp: '',
                    description: '',
                    tag: 'aa',
                    likes: '0'
                },
                {
                    name: 'b',
                    authorName: 'aa',
                    timeStamp: 'aa',
                    description: 'aa',
                    tag: 'aa',
                    likes: '0'
                },
                {
                    name: 'c',
                    authorName: 'aa',
                    timeStamp: 'aa',
                    description: 'aa',
                    tag: 'aa',
                    likes: '0'
                },
            ]
        }

    }

    componentWillMount(){
        fetch('http://127.0.0.1:5000/api/get-replays', {
            method: 'GET',
          }).then(response => response.json())
          .then(response => 
            {
                if (response['msg']){
                    this.setState(() =>({
                        replays: response['replays']
                    }));
                }
            })
            .catch(error => console.error('Error:', error));
    }

    render() {

        return (
            <Grid>
                <Col sm={9}>
                    <h1>Welcome to Replay City!</h1>
                    <hr></hr>
                </Col>

                <Replay replays={this.state.replays}/>

            </Grid>
        )
    }

}



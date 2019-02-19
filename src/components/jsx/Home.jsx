import React, { Component } from 'react';
import { Grid, Col,} from 'react-bootstrap';
import '../css/home.css'
import Replay from './Replay';
import auth from './auth';


export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {replays: []}
        this.likeDislike = this.likeDislike.bind(this);

    }

    componentDidMount(){
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



    likeDislike(e){
        const {replays} = this.state;
        let clickedReplay = replays[e.target.id];
        if(clickedReplay.liked === 'Like') {
            replays[e.target.id].liked = 'Unlike';
            replays[e.target.id].likes -= 1;
            this.setState(replays)
        } else {
            replays[e.target.id].liked = 'Like';
            replays[e.target.id].likes += 1;
            this.setState(replays)
        }

    }

    render() {

        return (
            <Grid>
                <Col sm={9}>
                    <h1>Welcome to Replay City!</h1>
                    <hr></hr>
                </Col>

                <Replay replays={this.state.replays} likeDislike={this.likeDislike}/>

            </Grid>
        )
    }

}



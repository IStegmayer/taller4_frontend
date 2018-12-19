import React, { Component } from 'react';
import { Grid, Col} from 'react-bootstrap';
import '../css/profile.css'
import Replay from './Replay';


export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            replays: [
                {
                    name: 'Ayyyy.rpl',
                    authorName: 'Pintudo',
                    timeStamp: 'xx days ago',
                    description: 'Ceiling triple flip reset double touch against Cloud9. eLeague tournament 3v3 14th September 2016',
                    tag: 'Goal',
                    likes: '300'
                },
                {
                    name: 'Ayyyy2.rpl',
                    authorName: 'Pintudo2',
                    timeStamp: 'yy days ago',
                    description: 'Ceiling tasdfasdfgainst Cloud9. eLeague tournament 3v3 14th September 2016',
                    tag: 'Save',
                    likes: '46'
                },
                {
                    name: 'Ayyyy3.rpl',
                    authorName: 'Pintudo3',
                    timeStamp: 'zz days ago',
                    description: 'Ceiling triple flip reset ayyyyyyyyyyyyyyyyyy urnament 3v3 14th September 2016',
                    tag: 'Teamplay',
                    likes: '2'
                },
            ]
        }

    }


    render() {

        return (
            <Grid>
                <Col sm={9}>
                    <h1>Userino's profile page!</h1>
                    <hr></hr>
                </Col>

                <Replay replays={this.state.replays}/>

            </Grid>
        )
    }

}



import React, { Component } from 'react';
import { Grid, Col} from 'react-bootstrap';
import '../css/profile.css'
import Replay from './Replay';


export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            replays: []
        }
        this.likeDislike = this.likeDislike.bind(this);
        this.refreshReplays = this.refreshReplays.bind(this);
        this.getAllReplays = this.getAllReplays.bind(this);
        this.reOrderReplays = this.reOrderReplays.bind(this);
    }

    componentDidMount(){
        this.getAllReplays();
    }

    getAllReplays(){
        fetch('http://127.0.0.1:5000/api/get-user-replays/'+this.props.userName, {
            method: 'GET'
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

    refreshReplays(filterino){
        fetch('http://127.0.0.1:5000/api/get-filtered-user-replays/'+this.props.userName+'/'+filterino, {
            method: 'GET'
          }).then(response => response.json())
          .then(response => 
            {
                if (response['msg']){
                    console.log(response);
                    this.setState(() =>({
                        replays: response['replays']
                    }));
                }
            })
            .catch(error => console.error('Error:', error));
    }

    
 

    reOrderReplays(choice){
        let buffer = this.state.replays;

        if (choice === 'Most likes'){
            function predicateBy(prop){
                return function(a,b){
                if( a[prop] < b[prop]){
                    return 1;
                }else if( a[prop] > b[prop] ){
                    return -1;
                }
                return 0;
                }
            }
    
            buffer = buffer.sort(predicateBy('likes'))

        } else {
            function predicateBy(prop){
                return function(a,b){
                if( Date.parse(a[prop]) < Date.parse(b[prop])){
                    return 1;
                }else if( Date.parse(a[prop]) > Date.parse(b[prop]) ){
                    return -1;
                }
                return 0;
                }
            }


            buffer = buffer.sort(predicateBy('timeStamp'))

        }

        this.setState({
            replays: buffer
        })
    }


    likeDislike(e){
        const {replays} = this.state;
        let clickedReplay = replays[e.target.id];
        const data = new FormData();
        data.append('replayName', clickedReplay.name);
        data.append('userName', this.props.userName);


        if(clickedReplay.liked === 'Like') {
            replays[e.target.id].liked = 'Unlike';
            replays[e.target.id].likes -= 1;
            fetch('http://127.0.0.1:5000/api/modify-likes/unlike', {
                method: 'POST',
                body: data
              }).catch(error => console.error('Error:', error));
            this.setState(replays);
        } 
        else {
            replays[e.target.id].liked = 'Like';
            replays[e.target.id].likes += 1;
            fetch('http://127.0.0.1:5000/api/modify-likes/like', {
                method: 'POST',
                body: data
              }).catch(error => console.error('Error:', error));
            this.setState(replays); 
        }

    }

    render() {

        return (
            <Grid>
                <Col sm={9}>
                    <h1>{this.props.userName}'s profile page!</h1>
                    <hr></hr>
                </Col>

                <Replay replays={this.state.replays} likeDislike={this.likeDislike} refreshReplays={this.refreshReplays} getAllReplays={this.getAllReplays} reOrderReplays={this.reOrderReplays}/>

            </Grid>
        )
    }

}



import React, { Component } from 'react';
import { Col, ToggleButton, ButtonToolbar, ToggleButtonGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../css/replay.css'


export default class Replay extends Component {

    static defaultProps = {
      categories: ['Goal', 'Teamplay', 'FullGame', 'Save'],
      filters: ['Most likes', 'Most recent']
    } 

    constructor(props){
        super(props);
        this.state = {
            replays: [],
            btnText: 'Unlike',
        }
        this.props.replays.map((replay, index) => {
            this.state.replays.push({
            name: replay.name,
            liked: 'Unlike'
        });
    });
        
    }
    
    btnClick(e) {
        const {replays} = this.state;
        let clickedReplay = replays[e.target.id];
        console.log(clickedReplay.liked);
        if(clickedReplay.liked === 'Like') {
            replays[e.target.id].liked = 'Unlike';
            console.log(replays);
            this.setState(replays)
        } else {
            replays[e.target.id].liked = 'Like';
            console.log(replays);
            this.setState(replays)
        }
    }


    render() {

            let categoryOptions = this.props.categories.map(category => {
                return <ToggleButton key={category} value={category} onChange={this.handleChange} className="filterToggleButton">{category}</ToggleButton>
            });
            let filterOptions = this.props.filters.map(filter => {
                return <ToggleButton key={filter} value={filter} onChange={this.handleChange} className="filterToggleButton">{filter}</ToggleButton>
            });
            let replayList = this.props.replays.map((replay, index) => {
                return <Col sm={9} key={replay.name}>
                            <ListGroupItem>
                                <div className="rows">
                                    <div className="rowerino likedPanel">
                                        <div className="internoDiv">
                                            <div>
                                                <span  onClick={ this.btnClick.bind(this) } id={index} className={this.state.replays[index].liked }>
                                                    { this.state.replays[index].liked  }
                                                </span>
                                            </div>
                                        </div>
                                        <div className="internoDiv">
                                            <span>{ replay.likes }</span>
                                        </div>
                                        <div className="internoDiv">
                                            <span className="dlBtn"></span>
                                        </div>
                                    </div>
                                    <div className="rowerino ">
                                        <h4>{replay.name}</h4>
                                        <p className="postedBy">Posted by {replay.authorName} on {replay.timeStamp}</p>
                                        <p className="uploadDescription">{replay.description}</p>
                                        <p className="taggerino"><span>{replay.tag}</span></p>
                                    </div>
                                </div>
                            </ListGroupItem>
                        </Col>
            });

        return (
            <div>
                <Col sm={9}>
                    <div className="filterPanel">
                        <div>
                            <p className="filterOptionLabel">Category: </p>
                            <ButtonToolbar >
                                <ToggleButtonGroup name="toggleButtons" type="radio">
                                    {categoryOptions}
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                        </div>
                        <div id="filterByFilterOption">
                            <p className="filterOptionLabel">Filter by: </p>
                            <ButtonToolbar >
                                <ToggleButtonGroup name="toggleButtons" type="radio">
                                    {filterOptions}
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                        </div>
                    </div>
                </Col>


                <ListGroup>
                    {replayList}
                </ListGroup>
            </div>
        )
    } 

}


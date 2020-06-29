import React, { Component } from 'react'
import '../styles/ScoreBoard.css'

class ScoreBoard extends Component {
    constructor(props){
        super(props);
        this.handlePlay = this.handlePlay.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handlePlay(evt){

    }
    handleReset(evt) {

    }
    render() {
        return(
            <div className="score-board">
                <div>Score: { this.props.score }</div>
                <div>Level: 1</div>
                <button className="score-board-button" onClick = {this.handlePlay}>Play</button>
                <button className="score-board-button" onClick = {this.handleReset}>Restart</button>
            </div>
        )
    }
}

export default ScoreBoard
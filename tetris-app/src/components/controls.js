import React, { Component } from 'react'
import '../styles/Controls.css'


class Controls extends Component {
    constructor(props){
        super(props);
        this.handleLeft = this.handleLeft.bind(this);
        this.handleRight = this.handleRight.bind(this);
        this.handleRotate = this.handleRotate.bind(this);
        this.handleDown = this.handleDown.bind(this);
    }
    handleLeft(evt){

    }
    handleRight(evt){

    }
    handleRotate(evt){

    }
    handleDown(evt){

    }
    render(){
        return (
            <div className="controls">
                <button className="control-button" onClick={this.handleLeft}>Left</button>
                <button className="control-button" onClick={this.handleRight}>Right</button>
                <button className="control-button" onClick={this.handleRotate}>Rotate</button>
                <button className="control-button" onClick={this.handleDown}>Down</button>
            </div> 
        )
    }
}

export default Controls
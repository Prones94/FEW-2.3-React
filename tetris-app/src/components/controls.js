import React, { Component } from 'react'
import '../styles/Controls.css'
import { connect } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'

const mapStateToProps = state => {
    return {
        isRunning: state.game.isRunning
    }
}

const mapDispatchToProps = () => {
    return {
        moveRight,
        moveLeft, 
        moveDown,
        rotate
    }
}

class Controls extends Component {
    constructor(props){
        super(props);
        this.handleLeft = this.handleLeft.bind(this);
        this.handleRight = this.handleRight.bind(this);
        this.handleRotate = this.handleRotate.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.isRunning = this.props
    }
    
    handleLeft(evt){
        if (!this.isRunning) { return }
        this.props.moveLeft()
    }
    handleRight(evt){
        if (!this.isRunning) { return }
        this.props.moveRight()
    }
    handleRotate(evt){
        if (!this.isRunning) { return }
        this.props.rotate()
    }
    handleDown(evt){
        if (!this.isRunning) { return }
        this.props.moveDown()
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

export default connect( mapStateToProps, mapDispatchToProps())(Controls)
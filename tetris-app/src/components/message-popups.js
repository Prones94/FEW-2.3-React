import React, { Component } from 'react'
import '../styles/Message.css'
import { connect } from 'react-redux'


const mapStateToProps = state => {
    return {
        gameOver: state.game.gameOver,
        isRunning: state.game.isRunning
    }
}

const mapDispatchToProps = () => {
    return { }
}


class MessagePopup extends Component{
    render(){
        const { gameOver, isRunning } = this.props
        let message = ''
        let isHidden = 'hidden'

        // If game is over, show "Game Over"
        if (gameOver) {
            message = "Game Over"
            isHidden = ''
        // If game isn't running and paused, show "Paused"
        } else if (!isRunning) {
            message = "Paused"
            isHidden = ''
        // Default message, which is hidden
        } else {
            message = ""
        }
        return(
            <div className={`message-pop-up ${isHidden}`}>
                <h1>{message}</h1>
                <p></p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(MessagePopup)
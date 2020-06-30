import React, { Component } from 'react'
import '../styles/GridBoard.css'
import GridSquare from './grid-square'
import { connect } from 'react-redux';
import { moveDown } from '../actions';
import { shapes } from '../utils';



const mapStateToProps = state => {
    return {
        grid: state.game.grid,
        shape: state.game.shape,
        rotation: state.game.rotation,
        x: state.game.x,
        y: state.game.y,
        speed: state.game.speed,
        isRunning: state.game.isRunning
    }
}

const mapDispatchToProps = () => {
    return {
        moveDown
    }
}

class GridBoard extends Component {
    makeGrid(){
        // Collected properties mapped to props from state
        const { grid, shape, rotation, x, y } = this.props
        const block = shapes[shape][rotation]
        const blockColor = shape
        // Map the Rows
        return grid.map((rowArray, row) => {
            return rowArray.map((square, col) => {
                const blockX = col - x
                const blockY = row - y
                let color = square
                // Map current falling block to grid
                // For any square that fall on the grid we need to look at the block aray and see 
                //if there is a 1 in this case we use the block color
                if (blockX >= 0 && blockX < block.length && blockY < block.length) {
                    color = block[blockY][blockX] === 0 ? color : blockColor
                }
                // Generate a unique key for every block
                const k = row * grid[0].length + col;
                // Generate a grid square
                return <GridSquare
                            key={k}
                            color={color}
                        />
            })
        })
    }
    render(){
        return (
            <div className='grid-board'>
                {this.makeGrid()}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(GridBoard)
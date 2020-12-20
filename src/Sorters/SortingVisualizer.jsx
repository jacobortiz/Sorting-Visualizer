import React from 'react'
import './SortingVisualizer.css'

const PRIMARY_COLOR = 'turquoise'

export class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            array: [],
        }
    }

    componentDidMount() {
        this.resetArray()
    }

    resetArray() {
        const array = []
        for(let i = 0; i < 320; i++) {
            array.push(randoms(5, 700))
        }
        this.setState({array})
    }

    render() {
        const {array} = this.state
 
        return (
            <div className="array-container">
                {array.map((value, index) => (
                    <div
                        className="array-bar"
                        key={index}
                        style={{
                        backgroundColor: PRIMARY_COLOR,
                        height: `${value}px`,
                        }}>
                    </div>
                ))}
                <button className='buttons' onClick={() => this.resetArray()}>Generate New Array</button>
            </div>
            
        )
    }
}


function randoms(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
import React from 'react'
import './SortingVisualizer.css'
import { mergeSortAnimations } from '../SortingVisualizer/Algorithms/MergeSort'


const ANIMATION_SPEED = 5
const PRIMARY_COLOR = 'turquoise'
const SECONDARY_COLOR = 'red'
const ARRAY_BARS = 50

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

    // sorting algorithms
    mergeSort() {
        const animations = mergeSortAnimations(this.state.array)
        for (let i = 0; i < animations.length; i++) {
            const array_bars = document.getElementsByClassName('array-bar')
            const is_color_changed = i % 3 !== 2
            if (is_color_changed) {
                const [bar_one_index, bar_two_index] = animations[i]
                const bar_one_style = array_bars[bar_one_index].style
                const bar_two_style =  array_bars[bar_two_index].style
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR
                setTimeout(() => {
                    bar_one_style.backgroundColor = color
                    bar_two_style.backgroundColor = color
                }, i * ANIMATION_SPEED)
            } else {
                setTimeout(() => {
                    const [bar_one_index, new_height] = animations[i]
                    const bar_one_style = array_bars[bar_one_index].style
                    bar_one_style.height = `${new_height}px`
                }, i * ANIMATION_SPEED)
            }
        }
    }

    bubbleSort() {

    }

    resetArray() {
        const array = []
        for(let i = 0; i < ARRAY_BARS; i++) {
            array.push(randoms(5, 700))
        }
        this.setState({array})
    }

    render() {
        const {array} = this.state

        return (
            <>
                <button className='buttons' onClick={() => this.resetArray()}>Generate New Array</button>
                <button className='buttons' onClick={() => this.mergeSort()}>Merge Sort</button>
                <button className='buttons' onClick={() => this.bubbleSort()}>Bubble Sort</button>


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
                </div>
            </>

        )
    }
}

function randoms(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
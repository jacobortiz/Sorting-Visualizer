import React from 'react'
import './SortingVisualizer.css'
import { mergeSortAnimations } from '../SortingVisualizer/Algorithms/MergeSort'
import { bubbleSortAnimations } from '../SortingVisualizer/Algorithms/BubbleSort'


const ANIMATION_SPEED = 20
const PRIMARY_COLOR = 'turquoise'
const SECONDARY_COLOR = 'red'
const ARRAY_BARS = 20

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
    bubbleSort() {
        console.log('doing bubble sort')
        const animations = bubbleSortAnimations(this.state.array)
        console.log('in bubbleSort() animations: ', animations)
        for (let i = 0; i < animations.length; i++) {
            const array_bars = document.getElementsByClassName('array-bar')
            console.log(array_bars)
        }



    }


    mergeSort() {

        const animations = mergeSortAnimations(this.state.array)
        console.log('in mergeSort() animations:', animations)
        for (let i = 0; i < animations.length; i++) {
            const array_bars = document.getElementsByClassName('array-bar')
            const is_color_changed = i % 3 !== 2
            // switches bar colors
            if (is_color_changed) {
                const [bar_one_index, bar_two_index] = animations[i]
                const bar_one_style = array_bars[bar_one_index].style
                const bar_two_style =  array_bars[bar_two_index].style
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR
                setTimeout(() => {
                    bar_one_style.backgroundColor = color
                    bar_two_style.backgroundColor = color
                }, i * ANIMATION_SPEED)
            // switch bar heights
            } else {
                setTimeout(() => {
                    const [bar_one_index, new_height] = animations[i]
                    const bar_one_style = array_bars[bar_one_index].style
                    bar_one_style.height = `${new_height}px`
                }, i * ANIMATION_SPEED)
            }
        }
    }

    resetArray() {
        const array = []
        for(let i = 0; i < ARRAY_BARS; i++) {
            array.push(randoms(5, 700))
        }
        this.setState({array})
    }

    getArray() {
        console.log(this.state.array)
    }

    render() {
        const {array} = this.state

        return (
            <>
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.getArray()}>Get current array</button>



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
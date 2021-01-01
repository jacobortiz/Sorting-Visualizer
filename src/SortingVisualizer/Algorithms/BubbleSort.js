export function bubbleSortAnimations(array) {
    const animations = []
    bubbleSort(array, animations)
    return animations
}

function bubbleSort(array, animations) {
    let length = array.length
    var swapped
    do {
        swapped = false
        for (let i = 0; i < length; i++) {
            // comparison
            if (array[i] > array[i + 1]) {
                let temp = array[i]
                animations.push([i, i])
                animations.push([i, i])

                array[i] = array[i + 1]
                array[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return array
}
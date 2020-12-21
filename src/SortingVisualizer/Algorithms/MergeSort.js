export function mergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const helper_array = array.slice();
    mergeSort(array, 0, array.length - 1, helper_array, animations);
    return animations;
  }

  function mergeSort(main_array, left_index, right_index, helper_array, animations) {
    if (left_index === right_index) return;
    const middle_index = Math.floor((left_index + right_index) / 2);
    mergeSort(helper_array, left_index, middle_index, main_array, animations);
    mergeSort(helper_array, middle_index + 1, right_index, main_array, animations);
    merge(main_array, left_index, middle_index, right_index, helper_array, animations);
  }

  function merge(main_array, left_index, middle_index, right_index, helper_array, animations) {
    let i = left_index;
    let j = left_index;
    let k = middle_index + 1;
    while (j <= middle_index && k <= right_index) {
      // these values are being pushed to change color.
      animations.push([j, k]);
      // pushed them again to revert colors.
      animations.push([j, k]);
      if (helper_array[j] <= helper_array[k]) {
        animations.push([i, helper_array[j]]);
        main_array[i++] = helper_array[j++];
      } else {
        animations.push([i, helper_array[k]]);
        main_array[i++] = helper_array[k++];
      }
    }
    while (j <= middle_index) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([i, helper_array[j]]);
      main_array[i++] = helper_array[j++];
    }
    while (k <= right_index) {
      animations.push([k, k]);
      animations.push([k, k]);
      animations.push([i, helper_array[k]]);
      main_array[i++] = helper_array[k++];
    }
  }
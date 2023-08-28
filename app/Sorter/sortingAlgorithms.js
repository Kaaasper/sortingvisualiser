export function getAnimations(array) {
    const animations = [];
    quickmiddleSort(array, animations)
    return animations;
}
function arrayEquals(a, b) {
    console.log(Array.isArray(a));
    console.log(Array.isArray(b));
    console.log(a.length === b.length);
    console.log(a.every((val, index) => val == b[index]));
}

function quickmiddleSort(array, animations) {

    /**
    * Partitions the array in two parts by the middle elements.
    * All elemnts which are less than the chosen one goes left from it
    * all which are greater goes right from it.
    *
    * @param {array} array Array which should be partitioned
    * @param {number} left Left part of the array
    * @param {number} right Right part of the array
    * @return {number}
    */
    function partition(array, left, right) {
        const pivotIndex = (left + right) >>> 1;
        var pivot = array[pivotIndex];

        while (left <= right) {
            while (array[left] < pivot) { animations.push([left, pivotIndex, 'comparison']); left++; }
            while (array[right] > pivot) { animations.push([right, pivotIndex, 'comparison']); right--; }
            if (left <= right) {
                animations.push([left, right, 'swap', array[left], array[right]]);
                var temp = array[left];
                array[left++] = array[right];
                array[right--] = temp;
            }
        }
        return left;
    }

    /**
    * Recursively calls itself with different values for
    * left/right part of the array which should be processed
    *
    * @private
    * @param {array} array Array which should be processed
    * @param {number} left Left part of the array which should be processed
    * @param {number} right Right part of the array which should be processed
    */
    function quicksort(array, left, right) {
        var mid = partition(array, left, right);
        if (left < mid - 1) {
            quicksort(array, left, mid - 1);
        }
        if (right > mid) {
            quicksort(array, mid, right);
        }
    }
    quicksort(array, 0, array.length - 1);
    return array


}
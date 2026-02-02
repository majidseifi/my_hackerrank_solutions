/*
 * Complete the 'mergeHighDefinitionIntervals' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
 */

function mergeHighDefinitionIntervals(intervals) {
    if (intervals.length === 0) return [];
    
    // Sort
    intervals.sort((a, b) => a[0] - b[0]);
    
    // get the first interval
    const merged = [intervals[0]];
    
    // iterate through intervals
    for(let i = 1; i < intervals.length; i++) {
        const last = merged[merged.length - 1];
        
        // check for overlap: if the first number in the interval, is less than or equal to the second number in the last merged element
        if (intervals[i][0] <= last[1]) {
            // overlap, let's extend the current interval in merged array to the max number
            last[1] = Math.max(last[1], intervals[i][1])
        } else {
            // no overlap, push as new interval
            merged.push(intervals[i]);
        }
    }
    return merged;
}
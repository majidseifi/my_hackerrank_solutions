/*
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */

function countResponseTimeRegressions(responseTimes) {
    if (responseTimes.length <= 1) return 0;

    let count = 0;
    let sum = responseTimes[0];
    for (let i = 1; i < responseTimes.length; i++){    
        const avg = sum / i;
        if (responseTimes[i] > avg) {
            count++;
        }
        sum += responseTimes[i]
        }
    return count;
}
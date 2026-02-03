/*
 * Complete the 'findSmallestMissingPositive' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY orderNumbers as parameter.
 */

function findSmallestMissingPositive(orderNumbers) {
    const n = orderNumbers.length;
    
    for (let i = 0; i < n; i++) {
        while (orderNumbers[i] >= 1 && orderNumbers[i] <= n && orderNumbers[orderNumbers[i] - 1] !== orderNumbers[i]) {
            const correctIndx = orderNumbers[i] - 1;
            [orderNumbers[i], orderNumbers[correctIndx]] = [orderNumbers[correctIndx], orderNumbers[i]];
        }
    }
    
    for (let i = 0; i < n; i++){
        if (orderNumbers[i] !== i+1) {
            return i + 1;
        }
    }
    return n + 1;
}
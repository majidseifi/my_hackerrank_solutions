/*
 * Complete the 'isNonTrivialRotation' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function isNonTrivialRotation(s1, s2) {
    const rotation = s1 + s1;
    if (rotation.includes(s2) && s1 !== s2) {
        return 1;
    } else {
        return 0;
    }
}
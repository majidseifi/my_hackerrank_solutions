/*
 * Complete the 'isAlphabeticPalindrome' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING code as parameter.
 */

function isAlphabeticPalindrome(code) {
    // Write your code here
    const letters = code.replace(/[^a-zA-z]/g,'').toLowerCase()
    const reversed = letters.split('').reverse().join('');
    return reversed == letters;
}
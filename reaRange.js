/*
*Escribe un programa que reacomode por orden los caracteres
  numericos y alfabeticos de una cadena de caracteres
 */

function rearrangeString(str) {
    // Separate letters and numbers
    const letters = str.split('').filter(char => isNaN(char));
    const numbers = str.split('').filter(char => !isNaN(char));

    // Sort both arrays
    letters.sort();
    numbers.sort();

    // Create the result string by interleaving the arrays
    let result = '';
    const maxLength = Math.max(letters.length, numbers.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (numbers[i]) result += numbers[i];
        if (letters[i]) result += letters[i];
    }

    // Check if the result is valid
    for (let i = 0; i < result.length - 1; i++) {
        if (isNaN(result[i]) === isNaN(result[i + 1])) {
            return ''; // Invalid combination
        }
    }

    return result;
}

// Test cases
console.log(rearrangeString("z3b1a2")); // Output: "1a2b3z"
console.log(rearrangeString("q56"));   // Output: "5q6"

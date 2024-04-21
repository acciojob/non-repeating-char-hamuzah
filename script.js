function firstNonRepeatedChar(str) {
 // Write your code here
	//let str = prompt("Enter a String");

	 if (str.length === 0) {
        return null; // If the string is empty, return null
    }

    // Create a map to store the frequency of each character
    const charFrequency = new Map();
    
    // Iterate through the string to count the frequency of each character
    for (let char of str) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    // Iterate through the string again to find the first non-repeated character
    for (let char of str) {
        if (charFrequency.get(char) === 1) {
            return char; // Return the first non-repeated character
        }
    }

    return null; // If all characters are repeated, return null
 

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

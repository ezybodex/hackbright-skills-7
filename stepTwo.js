// SUM TO ZERO

function addToZero(arr) {
    const set = new Set();

    for (const num of arr) {
        if (set.has(-num)) {
            return true;
        }
        set.add(num);
    }

    return false;
}

// Runtime: O(n)
// Space Complexity O(n)

// UNIQUE CHARACTERS

function hasUniqueChars(word) {
    const charSet = new Set();

    for (const char of word) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }

    return true;
}

// Runtime: O(n)
// Space Complexity O(k)

// PANGRAM SENTENCE

function isPangram(sentence) {
    const alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz');

    for (const char of sentence.toLowerCase()) {
        alphabetSet.delete(char);
    }

    return alphabetSet.size === 0;
}

// Runtime: O(n)
// Space Complexity O(k)

// LONGEST WORD

function findLongestWord(words) {
    let longestLength = 0;

    for (const word of words) {
        longestLength = Math.max(longestLength, word.length);
    }

    return longestLength;
}

const wordsArray = ["hi", "hello", "goodbye", "longestword"];
const longestLength = findLongestWord(wordsArray);
console.log(`Length of the longest word: ${longestLength}`);

// Runtime: O(n)
// Space Complexity O(1)
import maxSafeInteger from "fast-check";

/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containing every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]
Exam.every_third = function (list) { 
    return list.filter((element, index) => index % 3 === 0);
    };

// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"
Exam.merge_sentences = function (firstSen, secondSen) {
    let mergedString = '';
    let wordsOne = firstSen.split(" ");
    let wordsTwo = secondSen.split(" ");
    if (wordsOne.length !== wordsTwo.length) {
        throw "ValueError";
    } else {
        for (let i = 0; i < wordsOne.length; i++) {
            mergedString += wordsOne[i] + ' ' + wordsTwo[i] + ' ';
        };
    }
    return mergedString.trim();
};

// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6
Exam.lowercase_count = function (inputString) {
    var lowerList = [];
    let noSpace = inputString.replace(" ", "");
    let inputList = noSpace.split("");
    let lowerInputList = inputList.map(letter => letter.toLowerCase());
    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i] === lowerInputList[i]) {
            lowerList.push(inputList[i]);
        }
    }
    return lowerList.length;
};

// Objects

// Write a function that returns the longest key in the input object
// whose keys are all strings.
Exam.longest_key = function (inputDict) {
    var keyLengths = {};
    for (let key in inputDict) {
        keyLengths[key] = key.length;
    }
    let keyValues = Object.values(keyLengths);
    let longestKeyValue = Math.max(...keyValues);
    let result = Object.keys(keyLengths).find(key => keyLengths[key] === longestKeyValue);
    return result;
};


// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = function (inputDict) {
    let evenValues = [];
    for (let key in inputDict) {
        if (inputDict[key] % 2 === 0) {
            evenValues.push(inputDict[key]);
        }
    }
    let result = Math.max(...evenValues);
    return result;
};

// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = function (username, location='London') {
    return `Hello, ${username}, how is ${location}?`
};


// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.
Exam.floor_line = function (input, scalar = 1, offset = 0) {
    let calculation = (input*scalar) + offset
    if (calculation > 0) {
        return calculation;
    } else {
        return 0;
    }
};

export default Object.freeze(Exam);

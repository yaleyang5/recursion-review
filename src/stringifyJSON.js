// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// I: anything
// O: string
// C: none
// E: undefined, null, nested objects

// a lot of conditionals
var stringifyJSON = function(obj) {
  // should be checked before anything else
  // if undefined
  // if null
  if (obj === null) {
    return 'null';
  }
  // if obj is an array
  if (Array.isArray(obj)) {
    // create a storage variable to contain array of stringified elements
    var stringStorageArray = [];
    // iterate through obj
    for (var element in obj) {
      // recursively call this function on each element
      var stringToStore = stringifyJSON(obj[element]);
      stringStorageArray.push(stringToStore);
    }
    // return stringified version of array of strings
    return '[' + stringStorageArray.join(',') + ']';
  }
  // if obj is an object
  if (typeof obj === 'object') {
    // create storage array to contain elements
    var stringStorageArray = [];
    // iterate through obj
    for (var element in obj) {
      // recursively call this function on each element's key and value
      var stringToStore = stringifyJSON(element) + ':' + stringifyJSON(obj[element]);
      stringStorageArray.push(stringToStore);
    }
    // return stringified version of array with elements as key-value pairs
    return '{' + stringStorageArray.join(',') + '}';
  }
  // if string, return string with double quotes
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }


  // base case stringify. Number, string, etc.
  return String(obj);

  // 9,
  // null,
  // true,
  // false,
  // 'Hello world',
  // [],
  // [8],
  // ['hi'],
  // [8, 'hi'],
  // [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  // [8, [[], 3, 4]],
  // [[[['foo']]]],
  // {},
  // {'a': 'apple'},
  // {'foo': true, 'bar': false, 'baz': null},
  // {'boolean, true': true, 'boolean, false': false, 'null': null },
  // // basic nesting
  // {'a': {'b': 'c'}},
  // {'a': ['b', 'c']},
  // [{'a': 'b'}, {'c': 'd'}],
  // {'a': [], 'c': {}, 'b': true}
};

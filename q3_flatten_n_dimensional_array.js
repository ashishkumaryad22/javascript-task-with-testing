/* Write a Program to Flatten a given n-dimensional array */
let input = [1, [2, 3], [[4], [5]]];
let output = [];
const flatten = (x) => {
	// Write your code here
    x.forEach(e => {
        if (Array.isArray(e)) {
            flatten(e)
        } else {
            output.push(e);
        }
    });
    return output
}
flatten(input);
console.log(output);

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
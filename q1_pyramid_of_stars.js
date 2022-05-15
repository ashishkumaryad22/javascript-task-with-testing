/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = () => {
	// Write your code here
    let n = 6; 
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = n; j > i; j--) {
        string += " ";
      }
      for (let k = 1; k <= i * 2 - (1*k); k++) {
        string += "* ";
      }
      string += "\n";
    }
    console.log(string);
};
console.log(buildPyramid());

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;

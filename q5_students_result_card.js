// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
// let obj = {};
// for (i = 1; i <= 100; i++){
//     // let obj.
// }
function Student(n, a, m) {
    var name = n;
    var age = a;
    var marks = m;
    
    var averageMarks = function() {
      var sum = 0;
      marks.forEach(function(m){
        sum += m;
      });
      return sum/marks.length;    
    }
    this.printDetails = function() {
      console.log('Name: ' + name + ' Age: ' + age + ' Average Marks: ' + averageMarks());
    }
  }
  
  var student1 = new Student('Abhinav', 21, [70, 92, 84]);
  student1.printDetails();
  

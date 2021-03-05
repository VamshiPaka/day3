/**array elements */

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

let name = student[0],
  skills = student[1],
  scores = student[2];

let htmlScore = scores[0],
  cssScore = scores[1],
  jsScore = scores[2],
  reactScore = scores[3];

console.log("name:", name + " scores: ", scores + " skills: ", skills);

console.log("jsscore: ", jsScore + " reactScore: ", reactScore);

/**Function to convert array into object */
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

let studentObj = {
  name1: student[0],
  skills: student[1],
  scores: student[2],
};

console.log(studentObj.scores[1]);

var scores = [1, 2, 3, 4];

//총점 구하기
var total = 0;

// total += 1; //scores[0];
// total += 2; //scores[1];
// total += 3; //scores[2];
// total += 4; //scores[3];

for (var i = 0; i < scores.length; i++) {
  total += scores[i];
}

// //for of 문
// for (var s of scores) {
//   total += s;
// }



var average = total / scores.length;

console.log(`총점: ${total}점, 평균: ${average}`);
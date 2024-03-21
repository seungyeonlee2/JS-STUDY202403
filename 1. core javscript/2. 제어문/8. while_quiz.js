// 1. 첫번째 숫자 입력, 두번째 숫자 입력, 누적합 

var firNum = +prompt('첫번째 숫자를 입력하세요.');

var secNum = +prompt('두번째 숫자를 입력하세요');

// 첫번째 입력 숫자가 두번째 입력 숫자보다 큰 경우
// if (x > y) {
//   var t = x;
//   x = y;
//   y = t;
// }

var total = 0;

while (firNum <= secNum) {
  total += firNum;
  firNum++;
}
alert(`누적 합은 ${total} 입니다.`);


// 2. 입력받은 정수만큼의 기호를 출력하되 + - 가 교차되어 나오도록 하세요
var count = +prompt('정수: '); // 반복문 회전 수
var mark = ''; // 기호를 누적할 변수

var i = 1;
while (i <= count) {
  if (i % 2 === 1) {
    mark += '+';
  } else {
    mark += '-';
  }
  i++;
}
alert(mark);

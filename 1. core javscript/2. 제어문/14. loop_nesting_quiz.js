
3 * 4

* * * * //바깥쪽 반복문 엔터
* * * * //안쪽 반복문 별찍기
* * * *



var count = 0;
for (var i = 0; i < 3; i++) { //3회 반복
  for (var j = 0; j < 2; j++) { //2회 반복
    count++;
    console.log('메롱' + count);
  }
}


var a = +prompt(`한 변(1)`); //3
var b = +prompt(`한 변(2)`); //4

for (var i = 0; i < a; i++ ) {
  for (var j = 0; j < b; j++) {
    
  }
}

// ================================
// 가로길이, 세로길이
var width = +prompt('한 변 (1):'); 
height = +prompt('한 변(2):');

// 사각형을 저장할 변수
var rectangle = '';       //'* * * * *\n* * * * *\n ...'

for (var i = 0; i < width; i++) {
  // ....3번 반복
  for (var j = 0; j < height; j++) {
    // .....15번 반복
    rectangle += '* ';
  }
  rectangle += '\n';
}
console.log(rectangle);


* * * * *//바깥쪽 반복문 엔터
* * * * *//안쪽 반복문 별찍기
* * * * *//
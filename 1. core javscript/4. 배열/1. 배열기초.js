
// var food1 = '짬뽕, 탕수육, 자몽';

var food1 = '짬뽕';
var food2 = '탕수육';
var food3 = '자몽';

var all = `${food1}, ${food2}, ${food3}`;


var arr = [10, 20, 30, 40];
console.log(typeof arr);

console.log(arr[1]);
console.log(arr[2] ** 2);
console.log(arr[2]);

arr[1] = 999;
arr[3]++;

// 배열 데이터 수 확인
console.log(arr.length);

console.log(`첫번째 데이터: ${arr[0]}`);
console.log(`마지막 데이터: ${arr[arr.length - 1]}`);

// 배열데이터 순회 (전체참조: travis)
console.log('======================');

for (var i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// for ~ of 반복문 (배열 전용 반복문)
var weekDays = ['월','화','수','목','금','토','일'];
console.log('======================');

for (var i = 0; i < weekDays.length; i++) {
  console.log(`${weekDays[i]}요일!!`);
} //인덱스 조건 걸때 사용

for (var day of weekDays) {
  console.log(`${day}요일!!`);
} //day : weekDays를 1개씩 저장할 새로운 변수
// 전체 반복할 때 사용 



//배열 생성 관례: 이름 복수형, -List 어미
var fruits = ['자몽', '딸기', '오렌지',];
var fruitList = ['자몽', '딸기', '오렌지'];
var fruitArray = ['자몽', '딸기', '오렌지'];

console.log(fruits.length); //뒤에 , 붙여도 3개로 출력

var tags = [
  '<li>오렌지</li>', 
  '<a href="#">링크</a>', 
  '<h1>로고</h1>',
  '<h2>로고</h2>',
];   //쉼표로 끝내는게 복붙할 때 편함 



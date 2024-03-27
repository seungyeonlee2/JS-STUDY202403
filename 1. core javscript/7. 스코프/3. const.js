
let x;
x = 'zz';
x = 'ff';
console.log(x);

//const : 상수 선언 (값을 고정)
const y = '메롱';
// 값 변경 x
y = 'ggg'; 
console.log(y);

const PI = 3.14159265;
const COLOR_GREEN = '#0f0';
/* 
  $div.style.background = '#0f0';
*/
// ----------------->
/* 
  $div.style.background = COLOR_GREEN;
*/

// 상수는 객체의 불변성을 유지할 수 있다.
let kim = {
  name : '김철수',
  age : 30
};
kim.age = 31;
kim.name = '마이클 킴';

kim = {
  name : '김철수',
  age : 30
};

// --------------------------------------

const kim = {
  name : '김철수',
  age : 30
};
kim.age = 31;
kim.name = '마이클 킴';

kim = {
  name : '김철수',
  age : 30
};
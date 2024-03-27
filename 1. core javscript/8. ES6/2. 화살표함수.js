
//함수 선언문
function add(n1, n2) {
  return n1 + n2;
}

//함수 표현식
const add = function(n1, n2) {
  return n1 + n2;
};

//화살표 함수
// const add = function(n1, n2) {
//   return n1 + n2;
// };
const add = (n1, n2) => n1 + n2;
// -> 함수 add는 n1, n2를 받아서 n1 + n2로 내보낸다

const r1 = add(10, 20);
console.log(`r1: ${r1}`);

//중괄호 안에 코드 1줄이면 중괄호 생략 가능
const sayHello = () => console.log('안녕하세요');

sayHello();

const kim = {
  name: '김철수',
  greeting: sayHello,
  dance: () => console.log('춤을 신나게 춥니다.')
};

kim.dance();
kim.greeting();

// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
// 화살표함수 pow를 작성해보세요.

//파라미터 1개일때만 소괄호 생략 가능 (n)->n
const pow = n => n ** 2;

console.log(pow(5));
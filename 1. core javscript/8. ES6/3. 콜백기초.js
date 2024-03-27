// 어떤 계산을 하는 함수
function operate(param) {
  console.log(`param: ${param}`);

  const x = param(10, 20);

  console.log('계산기 작동!!');
  const n1 = 10, n2 = 20;
  const result = param(n1, n2);
  return result;
}
const abc = '123';

function add(n1, n2) {
  return n1 + n2;
}
operate(add(3, 5));

// operate 호출 -> 다른 이름이 없는 함수를 전달
operate(function(n1, n2) {
  return [n1, n2];
});

console.log(`result: ${result}`);

// operate(n1 - n2); //안됨


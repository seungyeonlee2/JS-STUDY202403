
function add2(n1, n2) {

}
function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

//만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
//파라미터에 집합자료형(배열, 객체)을 전달한다

function addAll(numbers, other) {
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}

//ES6 - spread 문법
function addAllES6(first, second, ...numbers /*,last8 ->사용 x*/) {
  console.log(`numbers: ${numbers}`);
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}


//100만줄

var r1 = addAll([5, 9, 2, 10, 20], [1, 2, 3]);
console.log(`r1: ${r1}`);

var r2 = addAllES6(10, 20, 30, 40, 50);
// n개의 함수 전달 -> 배열이나 객체에 담기


console.log('===============================');

// 다중 반환값
// 함수의 반환값은 언제나 하나다.
function arithmeticOprerate(n1, n2) {
  var addResult = n1 + n2;
 //식 두개써도 결과는 하나 
  var subResult = n1 - n2;
  var multiResult = n1 * n2;
  var divResult = n1 / n2;
  // return addResult, subResult;
  //다중 반환 하는 법
  return {
    add: add2(n1, n2), 
    sub: n1 - n2, 
    multi: n1 * n2, 
    div: n1 / n2,
    other: subResult ** divResult,
  };

}

var r3 = arithmeticOprerate(20, 10);
console.log(`덧셈결과: ${r3.add}`);
console.log(`뺄셈결과: ${r3.sub}`);
console.log(`곱셈결과: ${r3.multi}`);
console.log(`나눗셈결과: ${r3.div}`);

var r4 = arithmeticOprerate(5, 3)[1];

function foo() {
  return [{id: 'hhh'},2,3];
}
foo()[0].id;



//함수 밖에서 생긴 변수 : global scope - 전역변수
//프로그램 끝날때까지 있음
var x = 99; 

function foo() {
  //함수 안에서 생긴 변수 : local scope - 지역변수
  //함수가 호출될 때 메모리에 생성되고 호출 끝나면 사라짐 
  var x = '홍길동';
  console.log(`x: ${x}`);
  console.log(`foo x: ${x}`);
  //y에 홍길동 반영 x
  console.log(`foo y: ${y}`);

  //홍길동 내보내는 법
  return x; 
}

var y = foo();
//메모리안에서 홍길동 찾을 수 없음
console.log(`x: ${x}`);
console.log(`y: ${y}`);


//전역변수는 아무데서나 쓸 수 있음
// 지역변수는 함수 안에서만 사용, return 사용하면 밖에서도 가능
//함수 내부에서는 지역변수가 우선순위

console.log('===============================');

// 중첩 함수 : 함수 안에 함수를 정의
function outer(m) {
  var n = 'outer local n';
  var v = 'outer local v';
  console.log(n);
  console.log(v);
  console.log(m);

  //헬퍼 함수: 바깥쪽 함수 전용함수
  function inner() {
    console.log(n);
    var m = 'inner local m';
    console.log(m);
  }
  inner();
}
console.log(n);
console.log(v);
console.log(m);

outer('outer param m');
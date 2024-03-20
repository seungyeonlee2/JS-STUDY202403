
// js는 정수 나눗셈이여도 실수 결과값이 나옴.
console.log(27 / 5);

// 나머지 연산
console.log(27 % 5);

// 뒤에 숫자가 더 크면 앞에 숫자가 그대로 나머지, 몫은 0
console.log(4 % 10);

// 나눗셈 불가 (0으로는 나눌 수 없음)
console.log(5 % 0);

// 몫과 나머지 전부 0
console.log(0 % 5);

// 제곱 연산
console.log(3 ** 4);

console.log('==============');

// 증감 연산자
var x = 3;
x++; //4
++x; //5
x--; //4
--x; //3
console.log(`x: ${x}`); 

// 전위 연산, 후위 연산
var n1 = 10;
var n2 = n1++; //후위연산: n1이 n2에 먼저 대입, 후에 올림 
console.log(`n1: ${n1}, n2: ${n2}`);

var n3 = 10;
var n4 = ++n3; //n3 먼저 올리고 n4에 대입
console.log(`n3: ${n3}, n4: ${n4}`);

var xx = 5;
xx++; // - 연산 1번 (속도 빠름)
xx = xx + 1; // - 연산 2번 (속도 느림)
xx += 1; // xx = xx + 1; (=은 다른 기호랑 쓰면 항상 오른쪽에 온다)


xx--;
xx = xx - 1;
xx -+ 1; // xx = xx - 1;

xx *= 3;

xx /= 5;
xx **= 2;
xx %= 4;
console.log(`xx: ${xx}`);


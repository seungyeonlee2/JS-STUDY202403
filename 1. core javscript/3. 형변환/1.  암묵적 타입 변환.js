

var n1 = 10;
var n2 = '20';

console.log(n1+n2);

var n3 = n1 + ''; // '' 텍스트의 표기법 (숫자 + 문자 = 문자)
console.log(typeof n3);

var n4 = n2 - n1 -5 -'3';
console.log(n4);

var n5 = n1 * n2
console.log(n5);

var n6 = 'hello' * 3;
console.log(n6);

'안에 숫자가 아닌 다른 형태의 문자가 들어있으면 연산 할 수 없음'

console.log('============================================');

var n7 = +'99'; // string -> number

console.log(true + true);
console.log(true + false);
console.log(false + false); //true = 1, false = 0 으로 자동 변환

console.log('============================================');

//falsy 한 값 : 0, '', null, undefind, NaN > 나머지는 true (값: 1)

if (0) console.log('hello-1');
if ('') console.log('hello-2');
if (null) console.log('hello-3');
if (undefined) console.log('hello-4');
if (NaN) console.log('hello-5');

if (99) console.log('hello-6'); 
if (-87.943) console.log('hello-7'); //0이 아닌 모든 숫자 다 true (음수도) 
if (`알룡`) console.log('hello-8');
if ('') console.log('hello-9'); // 스페이스 데이터 있음, 빈문자열 xxx -> truedy한 값
if ([10, 11, 12]) console.log('hello-10'); //true 
if ([]) console.log('hello-11'); //빈 대괄호 (바구니) true 
if ({kind : '개'}) console.log('hello-12'); //true 
if (function(){}) console.log('hello-13'); //true


for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i}는 짝수입니다.`);
  } else {
    console.log(`${i}는 홀수입니다.`);
  }
}

console.log('============================================');

var apple = 10;
if (apple > 0) {
  console.log('사과가 있습니다.');
} else {
  console.log('사과가 없습니다.');
}

var n = 20;
var flag = n > 10;

if (!flag) {}

while (999) {
  
}


var x = '30';
var y = '40';

var result = x + y;
console.log(result);


var x = '30.5';
var y = '40.4';
var result =  Number(x) + Number(y);
// parseInt는 문자를 숫자로 바꿀때 정수로 바꾼다
// parseDouble을 사용하면 소수점을 지킬 수 있음.
var result2 = parseInt(x) + parseInt(y); 
var result3 = +x + +y

console.log(result);
console.log(result2);
console.log(result3);

var m = '' + 10 + 20;
console.log(m); // 숫자를 문자로 바꾸고싶을때

var f = '' + false; //문자 false로 변환 

console.log('============================================');

console.log(Boolean('hello')); 
console.log(Boolean(null)); 
console.log(!!999); //!! ->논리로 바꿔주는 명시적 타입변환
console.log(!!undefined); //!! ->논리로 바꿔주는 명시적 타입변환



//회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');

  // return token !== null;

  return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}

const isLogin = () => !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
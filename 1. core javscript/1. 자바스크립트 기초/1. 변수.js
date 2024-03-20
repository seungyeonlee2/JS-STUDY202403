var result; // 변수 선언

result = 10 + 20; // 값을 변수에 할당 (대입) -우항에 있는 값을 좌항에 있는 공간(영역)에 저장한다

var multiple = result * 3; // 90
console.log(multiple);

var fruit;
fruit = '자몽'; //초기화 할 땐 앞에 var안붙임
console.log(fruit);

var food = '볶음밥'; // food를 선언하면서 동시에 볶음밥으로 초기화

food = '돈까스'; // 변경, 사용할 때도 var 안붙임

console.log(food);

// 변수 이름 규칙
// var 7number; 숫자가 맨 앞에 오면 안됨
 var num7ber; //가능

 //var user name; 변수 띄어쓰기 안됨
 var currentloginuserphonenumber;
 var current_login_user_phone_number; //snake case (ps: o)
 var CurrentLoginUserPhoneNumber; //camel case (js: o)

 var Apple; 
 var apple;
 var APPLE; // 대소문자 구분, 셋 다 다른 변수

 var myPetName!; // 특수문자 사용 x
 var $myPetName_; // $ 와 _ 만 사용 가능 

 //var for; // 예약어는 변수로 사용 x (문법적인 의미가 들어간 단어)
 //var let; // (x)
 var For; // (o)
 var lEt; // (o) 

 //const myMoney = 1000; //변하는 값이기 때문에 상수로 지정 x
 var myMoney = 1000; //(o)

 const $orange = '#ffa808'; //상수는 대문자, snake case로 작성
 //-> const COLOR_ORANGE  

 
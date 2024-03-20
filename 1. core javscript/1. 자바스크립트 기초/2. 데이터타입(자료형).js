//숫자타입은 모두 실수처리
var num = 27; //27.0 
console.log(typeof num);

console.log(num / 5);


var foodName = '깐풍기'; // `` (백틱도 사용 가능), ""(큰따옴표 사용 가능)   
console.log(foodName);

// var element = '<nav><ul><li>딸기</li></ul></nav>';
// 문자 저장할때 띄어쓰기 못함, 탈출문자 사용
// var element = '<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n</nav>';

var elem = `
<nav>
  <ul>
    <li>메롱</li>
  </ul>
</nav>
`;

console.log(elem);

console.log('===========================');

var month = 4;
var day = 5;
var anni = '식목일';

var sentence = month + '월 ' + day + '일은 ' + anni + '입니다. ';
console.log(sentence);

var sentence2 = `${month}월 ${day}일은 ${anni}입니다.`; //'', ""에선 적용 안됨 , 백틱으로 사용 
console.log(sentence2);

var userAge = 30;

//boolean : 논리
var flag = userAge > 19;
console.log(typeof flag);
console.log(flag);

var TURE = true;

// undefined: 아직 값이 없는 상태 (고의로 값을 안넣은게 아님) - 자동할당
// null: 일부러 값을 없앤 상태 (고의로 값을 없앰) - 수동할당
var petName;
console.log(petName);

var myHobby = '산책';
myHobby = null;
console.log(myHobby);


function  buyNewCar(money) {
  if (money > 5000) return '그랜져';
  else if (money > 3000) return '아반떼';
  else if (money <= 0) return null;
}

-10; //단항연산자
20-10; //이항연산자




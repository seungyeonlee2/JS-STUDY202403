
// 1. 입력받은 숫자 이하의 2의 제곱수를 가로로 출력 

 var n = +prompt('양의 정수를 입력하세요');

 // 제곱수 누적할 변수 생성
 var accum = ''; //문자열로 생성 (숫자로 하면 더해짐)
 for (var i = 2; i <= n; i *=2) {
  accum += `${i} `;       // 숫자 띄어쓰기
}
 alert(accum);


  //20      20  2 4 8 16
// var a = +prompt('양의 정수를 입력하세요');
// var total = 0;
// for (var total = 2; total <= a; total ** 2) {
//   total += 2;
//   alert (`${total}`);
// }



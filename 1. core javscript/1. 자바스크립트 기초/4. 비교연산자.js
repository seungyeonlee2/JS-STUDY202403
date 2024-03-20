
var a = 5; //5
var b = '5'; //53 (문자로 표현될 시)

console.log(a === b); //a와 b가 같은지 쓸 때 ===
console.log(a !== b); //a와 b가 다른지 !==

console.log('========================');

// == 비교는 결과 예측이 어려움
console.log('0'== '');
console.log(0== '');
console.log('0'== 0);
console.log(false== 'false');
console.log(false== '0');

console.log('========================');

// === 비교는 정확한 예측
console.log('0'== '');
console.log(0== '');
console.log('0'== 0);
console.log(false== 'false');
console.log(false== '0');

console.log('========================');
// 대소 비교 
           //97   65
console.log('a' > 'A');
//'A' -10진법 표시 65
//'a' -10진법 표시 97

          //99     97
console.log('c' < 'a');

console.log('강' < '황');

//         97 99   97 100  - (사전에서 뒤로 나올수록 큼)
console.log('ace' , 'ade');
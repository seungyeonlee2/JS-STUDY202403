var begin=10, end=0, step=1;

//while은 실행하면 꼭 다시 while로 올라간다

var n = begin;

while (n>=end) {
  console.log(`${n}!!`);
  n-= step;
}

console.log('===========================');

var level = 7;
var n = 1;
while (n <=9) {
  console.log(`${level} x ${n} = ${level * n}`);
  n++;
}
// 변수활용

console.log('===========================');

// 10 ~ 34까지의 정수를 1씩 증가하면서 출력

var m = 10; //begin

while (m <= 34) {
  console.log(m);
  m++;
}


// 10 ~ 34까지의 정수를 홀수만 출력

var m = 10; //begin

while (m <= 34) {
  if (m % 2 === 1) {
    console.log(m);
  }
  m++;
}

//홀수 : 2로 나눴을 때 나머지 1 -> m % 2 === 1

console.log('===========================');

// 1 ~ 10 까지의 누적합
var total = 0;
var i = 1;

while (i <= 10) {
  total += 1;
  i++;
}

console.log(total);







console.log('===========================');

// console.log(`${n}!!`);

// n--;

// console.log(`${n}!!`);

// n--;

// console.log(`${n}!!`);


// n--;

// console.log(`${n}!!`);


// n--;

// console.log(`${n}!!`);

// n--;

// console.log(`${n}!!`);







// // console.log('9!!');
// // console.log('8!!');
// // // ...
// // console.log('0!!');

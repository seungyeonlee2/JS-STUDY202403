
// 횟수 미정 : while (ex-사용자가 space를 누를때까지)
// 횟수 정해졌을때 : for (ex-노래 20번 반복재생)



// 1 -> 2 -> 3 -> 4 -> 2(ture) -> 3 -> 4 -> 2 ... (2번 fales 나오면 실행 종료)
var i = 1; // 1. begin
while (i <= 5) { // 2. end
  console.log('hello'); // 3. execute
  i++; // 4. step
}


for (var i = 1; i <=5; i++) {
  console.log('hello');
}


// 1 ~ 10까지의 누적합
var total = 0; //반복문 안에 있으면 xxx , 밖에 있어야 함
for (var i = 1; i <= 10; i++) {
  total += i;
}

// 횟수 지정 반복문
for (var i = 0; i < 5; i++) {
  console.log('메롱');
}
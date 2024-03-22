
for (var i = 1; i < 50; i++) {
  console.log(i);
  if ( i > 10 ) {
  break
  }
}

console.log('=======================');
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 2; j++) {
    console.log(`${i}, ${j}`);
  }
}

console.log('=======================');
for (var i = 0; i < 3; i++) {      
  for (var j = 0; j < 2; j++) {
    if (i === j) {
      break //break가 안쪽에 있으면 제일 가까운 블록만 break(탈출??)
    }
    console.log(`${i}, ${j}`);
  }
}


//반복문은 조건문일때 사용
// 만약 ~ 하면 끝내라 break
// 항상 if문과 씀


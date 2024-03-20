

var age = 6;

//if 뒤에 무조건 소괄호 
if (age >= 20) {
  console.log('성인입니다.');
} else if (age >= 17) {
  console.log('고딩입니다.');
} else if (age >= 14) {
  console.log('중딩입니다.');
} else if (age >= 8) {
  console.log('초딩입니다.');
} else {
  console.log('아기입니다.');
}

// 그냥 if 만 여러개 쓰면, 여러개의 그룹으로 인식해서 따로따로 작동함
// 처음 조건이 밑에 조건을 포함하면 안됨
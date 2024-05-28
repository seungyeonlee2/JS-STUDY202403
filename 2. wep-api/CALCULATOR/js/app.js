
// 실행코드 (함수 호출, 이벤트 등록...., 핸들러정의)
// console.log($userInput);

// 이벤트 핸들러 바인딩
$addBtn.addEventListener('click', e => {
  // console.log('+ click!'); 콘솔창에서 확인
  calculate(ADD); //연산 처리 함수 / vendor에서 정의
});
$subtractBtn.addEventListener('click', e => {
  calculate(SUB); //연산 처리 함수 / vendor에서 정의
});
$multiplyBtn.addEventListener('click', e => {
  calculate(MUL); //연산 처리 함수 / vendor에서 정의
});
$divideBtn.addEventListener('click', e => {
  calculate(DIV); //연산 처리 함수 / vendor에서 정의
});

//이름 동사- 함수, 명사-상수 (관례)
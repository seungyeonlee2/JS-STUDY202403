//반복문, 조건문, 탈출문

// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// 난이도는 상, 중, 하 난이도가 존재하며 난이도별 입력 횟수제한이 다르다.

// ==========================================================================

// alert ('1 ~ 50 사이의 무작위 숫자를 맞춰보세요!!!');
// var userInput = +prompt('숫자를 입력하세요'); // 유저 숫자 입력

// var inputNum = +''; // 입력값을 저장할 변수

// 랜덤 범위 정수값 공식
// x이상 y이하의 랜덤정수 생성
// **** Math.floor(Math.random() * (y - x + 1)) + x ****

// # 117 ~ 142
// Math.floor(Math.random() * (142 - 117 + 1)) + 117
// Math.floor(Math.random() * (26)) + 117

// 랜덤 정수 저장할 변수
// 1 ~ 50
// var randomNum = Math.floor(Math.random() * (50)) + 1

// 사용자 입력값이랑 랜덤 변수 비교
alert("1 ~ 50 사이의 무작위 숫자를 5번 안에 맞춰보세요!!");

var randomNum = Math.floor(Math.random() * 50) + 1;

// var count = 5; // 5번 실행

while (true) {
  var userInput = +prompt("숫자를 입력하세요");
  // var inputNum = +'';

  if (userInput === randomNum) break;
  else if (userInput !== randomNum) {
    if (userInput > randomNum) {
      alert("down!!");
    } else {
      alert("up!!");
    }
  }
}

if (userInput === randomNum) {
  alert(`${randomNum}, 정답입니다.`);
} else {
  alert(`틀렸습니다. 정답은 ${randomNum}입니다.`);
}

//================================
//정답생성
var secret = Math.floor(Math.random() * 100) + 1;
// 콘솔에서 정상 출력 되는지 확인

var countDown = 5; //입력 기회 횟수

while (true) {
  // 사용자의 입력값
  var answer = +prompt(
    `숫자를 입력하세요! [1 ~ 100] ${secret}(코드작성시 정답미리확인)`
  );
  countDown--; //입력시 기회 1번 소진

  // 정답 판정
  if (secret === answer) {
    alert(`정답입니다!`);
    break; //정답일때 탈출
  } else if (secret > answer) {
    alert(`up!!`);
  } else {
    alert(`down!`);
  }
  // 카운트다운 게임 종료 조건
  if (countDown <= 0) {
    alert(`기회가 모두 소진되었씁니다. 정답은 ${secret}입니다.`);
    break;
  } else {
    alert(`${countDown}번의 기회가 남았습니다.`);
  }
}

//사용자 입력값, 정답판정을 반복

//================================

//난이도 상수
const HIGH = 1,
  MIDDLE = 2,
  LOW = 3;

var initCount; //사용자의 총 입력 기회

while (true) {
  while (true) {
    // 난이도 선택
    var level = +prompt(
      "난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]"
    );

    if (level === HIGH) {
      initCount = 3;
    } else if (level === MIDDLE) {
      initCount = 5;
    } else if (level === LOW) {
      initCount = 10;
    } else {
      alert("난이도를 숫자로 다시 입력해주세요");
      continue;
    }
    break;
  }

  //정답생성 (난이도조절)
  var secret = Math.floor(Math.random() * 100) + 1;
  // 콘솔에서 정상 출력 되는지 확인

  var countDown = initCount; //입력 기회 횟수

  var min = 1,
    max = 100; //최대값최솟값

  while (true) {
    // 사용자의 입력값
    var answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);

    //입력 값이 범위안의 값인지 체크
    //countDown--;  if위에 있으면 잘못 입력해도 기회 1번 소진됨
    if (answer < min || answer > max) {
      alert ('범위 안의 값을 입력하시오');
      continue //다시 올려서 재입력하게 하기 (기회소진 xx)
    }

    countDown--; //입력시 기회 1번 소진

    // 정답 판정
    if (secret === answer) {
      alert(`정답입니다!`);
      break; //정답일때 탈출
    } else if (secret > answer) {
      alert(`up!!`);
      min = answer + 1;
    } else {
      alert(`down!`);
      max = answer - 1;
    }
    // 카운트다운 게임 종료 조건
    if (countDown <= 0) {
      alert(`기회가 모두 소진되었씁니다. 정답은 ${secret}입니다.`);
      break;
    } else {
      alert(`${countDown}번의 기회가 남았습니다.`);
    }
  }

  //게임 재시작 여부 확인
  var exitFlag = confirm("한판 더 하실?");
  if (!exitFlag) //exitFlag === false 
  {
    alert ('잘가~');
    break
  }
}

//사용자 입력값, 정답판정을 반복

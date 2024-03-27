
// 정수 n을 전달하면 1 ~ n까지의 모든 짝수를 출력
function showEvenNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}

// showEvenNumber(7);

// 정수 n을 전달하면 1 ~ n까지의 모든 홀수를 출력
function showOddNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      nums.push(i);
    }
  }
  console.log(nums);
}
showOddNumber(7);

// ============ 위에 코드 합치기 =============

function showOddOrEvenNumber(n, isOdd) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === isOdd) {
      nums.push(i);
    }
  }
  console.log(nums);
}
showOddOrEvenNumber(7, 0)

//x의 배수만 
function showTripleNumber(n, x) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % x === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}


// 콜백을 이용한 솔루션
// 정수 n을 전달하면 1 ~ n까지의 정수를 조건에 맞게 출력
function showNumber(n, condition) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (condition(i)) {
      nums.push(i);
    }
  }
  console.log(nums);
}

showNumber(50, function(i) {
  return i % 2 === 0;
});

// showNumber(20, i => i % 2 === 0);
showNumber(20, function(i) {
  return i % 2 === 1;
});

showNumber(100, function(i) {
  return i % 6 === 0 && i % 12 !==0;
});

showNumber(10, function(i) {
  return true;
});

console.log('==============================');

function makeCook(recipeName, recipeCode) {
  console.log('###나만의 레시피###');
  console.log(`!!!요리이름: ${recipeName}`);
  //실제 레시피 출력은 만들어서 전달해주세요
  recipeCode();

  console.log('참 쉽죠?? 만들어보세요~');
}

makeCook('맛도리쩝쩝라면', () => {
  console.log('1. 아리수 팔팔 끼리기');
  console.log('2. 대파 양파 청양고추 팍팍퍽퍽');
  console.log('3. ㅋㅋㅋ 맛점');
});

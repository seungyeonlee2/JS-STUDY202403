
const NOT_FOUND = -1

// 배열 안에 특정 요소의 인덱스를 찾아 반환하는 함수
function myIndexOf(array, searchElement) {
  for (var i = 0; i < array.length; i++) {
    if (searchElement === array[i]){
      return i;
    }
  }
  //해당하는 값이 없을때 
  return NOT_FOUND; 
}

function myIncludes(array, searchElement) {
  for (var i = 0; i < array.length; i++) {
    if (searchElement === array[i]) {
      return true
    }
  }
  return false
}
//line 15 ======================> 개선
function myIncludes(array, searchElement) {
    return myIndexOf(array, searchElement) !== NOT_FOUND;
  }



var foods = ['족발', '피자', '파스타', '김치찌개'];

var idx = myIndexOf(foods, '피자자');
console.log(`index: ${idx}`);

var flag = myIndexOf(foods, '족발');
console.log(`flag: ${flag}`);

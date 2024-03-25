
var pets = ['멍멍이', '야옹이', '쩝쩝이'];
//첫번째 데이터: 0번
console.log(pets);

// pets[3] = '징징이';
// console.log(pets);

//push(): 배열 맨 끝에 데이터 추가
pets.push('징징이');
pets.push('어흥이', '거북이', '비둘기');

console.log(pets);

// pop(): 배열 맨 끝 데이터 삭제
pets.pop();
pets.pop();
pets.pop(); //3개 삭제
console.log(pets);


var myPet1 = pets.pop();
pets.pop();
var myPet2 = pets.pop();

console.log(pets);
console.log(myPet1);
console.log(myPet2);

// shift() : 배열의 맨 첫번째 데이터 삭제
// unshift() : 배열의 맨 첫번째에 추가
pets.shift();
console.log(pets);

pets.unshift('뽈뽈이');
console.log(pets);



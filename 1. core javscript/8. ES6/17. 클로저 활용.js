/*
const increase = (() => {
  let count = 0;
  return () => ++count;
})();


const decrease = (() => {
  let count = 0;
  return () => --count;
})();

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());
*/


const countClosure = () => {
  let count = 0;

  const increase = () => ++count;
  const decrease = () => --count;

  return { increase: increase, 
           decrease: decrease //키랑, 변수이름 (키:변수) 같으면 1번만 써도 됨 
          };
};
const {increase, decrease } = countClosure();
// console.log(typeof counter);
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());

//=================================================

const { increase, decrease } = (() => {
  let count = 0;
  return {
    increase: () => ++count,
    decrease: () => --count,
  }
})();
// console.log(typeof counter);

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());
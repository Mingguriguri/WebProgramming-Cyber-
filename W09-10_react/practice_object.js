/*
객체
: 여러 속성을 하나의 변수 혹은 상수에 저장할 수 있도록 해주는 데이터 타입
{key: value}
*/
const user = {
    name: '김민정',
    age: 25
};
console.log("객체")
console.log(user)
console.log(user.name)
console.log(user.age)

/*
객체의 비구조화 할당
배열이나 객체의 속성을 해제하여, 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현 / 순서 무의미 
*/
console.log("객체의 비구조화 할당")
const {name, age} = user;
console.log(name)
console.log(age)
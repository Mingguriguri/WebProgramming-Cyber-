/*
자바스크립트 함수:
1. function
2. (매개변수) => (코드블록)
*/

/*
1. function 
- function 키워드. return 을 사용해서 반환
*/
function add(a, b){
    return a+b;
}
const sum = add(125,74);
console.log(sum)

/*
2. (매개변수) => (코드블록)
function 대신에 => 문자 사용해서 구현
왼쪽: 매개변수 / 오른쪽: 코드블록
*/
const getGrade = score => {
    if (score >= 80 ){
        return '합격';
    }
    else {
        return '불합격';
    }
}

const grade = getGrade(90);
console.log(grade)
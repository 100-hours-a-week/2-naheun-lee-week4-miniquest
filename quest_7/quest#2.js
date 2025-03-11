// 1. let 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageLet); 
let messageLet = "Hello with let!";
/*

실행 결과: let 변수를 선언하기 전에 접근하여 ReferenceError 발생
 */


// 2. const 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageConst); 
const messageConst = "Hello with const!";
/*
실행 결과: const 변수를 선언하기 전에 접근하여 ReferenceError 발생
 */


// 3. 화살표 함수의 호이스팅 확인하기
console.log(greet()); 
const greet = () => "Hello, Arrow Function!";
/*
실행 결과: greet가 초기화되지 않아 TypeError 발생
 */
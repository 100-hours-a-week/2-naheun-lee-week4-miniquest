const message = 'Hello, JavaScript!';

const showMessage = () => {
  console.log(message); 
  let message = 'Hello, ES6!';
  console.log(message);
};

showMessage();

/* 
실행 결과: 첫번째로 message 출력하려고 할 때 ReferenceError 발생
*/
console.log('Start');

setTimeout(() => {
    console.log('Async Operation Complete');
    console.log('End'); 
    console.log('setTimeout은 비동기 함수(Async Function)인데 1초(1000) 후 setTimeout 콜백이 실행되고 콜백 내부는 동기적으로 실행되어 순차적으로 출력된다.')
}, 1000);


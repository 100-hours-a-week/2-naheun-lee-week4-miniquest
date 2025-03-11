// createCounter 함수 
const createCounter = () => {
    let count = 0; 

    return {
        increment: () => {
            count += 1;
        },
        decrement: () => {
            count -= 1;
        },
        getCount: () => {
            return count;
        }
    };
};

//실행 예제
const counter = createCounter();


counter.increment();
console.log(counter.getCount()); 

counter.decrement();
console.log(counter.getCount()); 

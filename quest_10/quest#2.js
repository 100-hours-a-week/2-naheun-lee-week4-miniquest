// messageMaker 함수
const messageMaker = (fisrt) => {
    return (second) => {
        return `${fisrt} ${second}`;
    };
};

//실행 예제
const greetMaker = messageMaker("Hello,");

console.log(greetMaker("naheun!")); 


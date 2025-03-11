const color = 'blue';

const firstLevel = () => {
  let color = 'red';

  const secondLevel = () => {
    let color = 'green';
    console.log(color); // (1) "green"
  };

  secondLevel();
  console.log(color); // (2) "red"
};

firstLevel();
console.log(color); // (3) "blue"

/*

실행 결과: 
green
red
blue

<실행 흐름>
1. 전역 실행 컨텍스트가 생성
2. firstLevel() 호출
3. secondLevel() 호출
4. console.log(color); // (1) 실행
5. console.log(color); // (2) 실행
6. console.log(color); // (3) 실행

*/
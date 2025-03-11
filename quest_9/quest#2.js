if (true) {
    let isRaining = true; 
}

console.log(isRaining); // ReferenceError 발생

/*
<해결 방법>
let isRaining; // 블록 외부에서 선언

if (true) {
    isRaining = true; 
}

console.log(isRaining);
*/

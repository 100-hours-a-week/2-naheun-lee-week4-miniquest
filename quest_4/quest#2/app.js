import { add, subtract } from "./operations.js";
import User from "./userProfile.js";

// add, subtract 사용
const sum = add(1, 2);
const difference = subtract(2, 1);

console.log(`합: ${sum}`); 
console.log(`차: ${difference}`); 

// User 사용
const user = new User("이나은", 25);
console.log(`이름: ${user.name}, 나이: ${user.age}`); 

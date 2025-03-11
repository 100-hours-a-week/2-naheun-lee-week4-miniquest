// Person 클래스 
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  //인스턴스 생성성
  const person = new Person("Jane Doe", 25);
  
  person.greet();
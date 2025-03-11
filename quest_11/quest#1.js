// Rectangle 클래스
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

//실행 예제
const rect1 = new Rectangle(4, 5);
console.log("면적:", rect1.area()); 
console.log("둘레:", rect1.perimeter()); 



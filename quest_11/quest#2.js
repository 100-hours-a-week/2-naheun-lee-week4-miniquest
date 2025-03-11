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

// Square 클래스
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    isSquare() {
        return this.width === this.height;
    }
}

//실행 예시
const square1 = new Square(5);
console.log("면적:", square1.area()); 
console.log("둘레:", square1.perimeter()); 
console.log("Is Square:", square1.isSquare()); 
// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((acc, value) => acc + value, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    return this.sides.every((value) => value < this.perimeter - value);
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sides.every((value) => value === this.sides[0]);
  }
  get area() {
    return this.sides[0] ** 2;
  }
}

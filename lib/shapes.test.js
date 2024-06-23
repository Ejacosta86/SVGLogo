const { Shape } = require("../lib/shape");
const { Circle, Triangle, Square } = require("../lib/shapes");

describe("Circle", () => {
    test("To render a circle svg", () => {
      const expectedElement = `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
      const circle = new Circle();
      const actualSVG = circle.render();
      expect(actualSVG).toEqual(expectedElement);
    });
  });

  describe("Triangle", () => {
    test("To render a triangle svg", () => {
      const expectedElement = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
      const triangle = new Triangle();
      const actualSVG = triangle.render();
      expect(actualSVG).toEqual(expectedElement);
    });
  });

  describe("Square", () => {
    test("To render a square svg", () => {
      const expectedElement = `<rect x="50" width="200" height="200" fill="${this.color}" />`;
      const square = new Square();
      const actualSVG = square.render();
      expect(actualSVG).toEqual(expectedElement);
    });
  });
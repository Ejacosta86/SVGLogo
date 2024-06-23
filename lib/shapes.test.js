const { Shape } = require("../lib/shape");
const { Circle, Triangle, Square } = require("../lib/shape");

describe("Circle", () => {
    test("To render a green circle svg", () => {
      const expectedElement = `<circle cx="150" cy="100" r="100" style="fill:green">`;
      const circle = new Circle();
      circle.setColor("green");
      const actualSVG = circle.render();
      expect(actualSVG).toEqual(expectedElement);
    });
  });

  describe("Triangle", () => {
    test("To render a green triangle svg", () => {
      const expectedElement = `<polygon points="150, 18 244, 182 56, 182" style="fill:green"/>`;
      const triangle = new Triangle();
      triangle.setColor("green");
      const actualSVG = triangle.render();
      expect(actualSVG).toEqual(expectedElement);
    });
  });

  describe("Square", () => {
    test("To render a green square svg", () => {
      const expectedElement = `<rect x="50" width="200" height="200" style="fill:green"/>`;
      const square = new Square();
      square.setColor("green");
      const actualSVG = Square.render();
      expect(actualSVG).toEqual(expectedElement);
    });
  });
const { Shape } = require("./shape");

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" width="200" height="200" fill="${this.color}"/>`
    }
}

//create shape object
function getShape({shape, text = "", textColor = "green", color = "white"}) {
    switch (shape.toLowerCase()) {
        case "circle":
        return new Circle(text, textColor, color);
        case "triangle":
        return new Triangle(text, textColor, color);
        case "square":
        return new Square(text, textColor, color);
    }
}


module.exports = { Circle, Triangle, Square, getShape };
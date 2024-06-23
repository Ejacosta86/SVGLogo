class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        throw new Error("Child should override this method");
    }

    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text}">${this.textColor}</text>`;
    }

    createShape() {
        let str = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        str = str.concat(this.render(), this.renderText());
        str += "</svg>";
        return str;
    }

} 

   



 module.exports = { Shape };


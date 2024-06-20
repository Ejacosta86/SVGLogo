class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
} 

    render() {
        throw new Error("Childe should override this method");
    }

    renderText() {
        return `<text x="50%" y="125" text-anchor="middle" font-size="80px" fill="${this.textColor}">${this.text}</text>`;
    }

    createShape() {
        
    }



module.exports = { Shape };


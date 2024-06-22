const fs = require("fs");

function createSvg(shape) {
    const svgTxt = shape.createShape();
    fs.writeFile("./examples/logo.svg" , svgTxt, () => {
        console.log("Svg file has been created!")
    });
}

module.exports = { createSvg };
/**
 * 
 * @param {*} oCanvas a canvas object to draw on
 * @param {Number} x x position of the square, zero is top
 * @param {Number} y y position of the square, zero is left
 * @param {Number} size size of the square in pixels
 * @param {Boolean} isFilled if the square is filled in
 */
let drawSquare = function (oCanvas, x, y, size, isFilled) {
    let bIsFilled = isFilled || false;
    let oDrawingTool = oCanvas.getContext('2d');
    if (bIsFilled) {
        oDrawingTool.fillRect(x, y, size, size);
    } else {
        oDrawingTool.strokeRect(x, y, size, size);
    }
};

let redrawGrid = function (canvas, gridWidth, gridPixelSize) {

    let x = 0, y = 0;
    let nPositionX = 0, nPositionY = 0;
    while (y < gridWidth) {
        x = 0;
        while (x < gridWidth) {
            nPositionX = x * gridPixelSize;
            nPositionY = y * gridPixelSize;
            drawSquare(canvas, nPositionX, nPositionY, gridPixelSize);
            x = x + 1;
        };
        y = y + 1;
    };

};

export { drawSquare, redrawGrid };
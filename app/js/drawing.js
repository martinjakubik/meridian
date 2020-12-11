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
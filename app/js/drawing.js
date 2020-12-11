let drawSquare = function (oCanvas, x, y, size, isFilled) {
    let bIsFilled = isFilled || false;
    let oDrawingTool = oCanvas.getContext('2d');
    if (bIsFilled) {
        oDrawingTool.fillRect(x, y, size, size);
    } else {
        oDrawingTool.strokeRect(x, y, size, size);
    }
};

export { drawSquare };
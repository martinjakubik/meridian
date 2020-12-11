/**
 * 
 * @param {*} oCanvas a canvas object to draw on
 * @param {Number} x x position in pixels, zero is top
 * @param {Number} y y position in pixels, zero is left
 * @param {Number} gridCellSize size of the cell in pixels
 * @param {Boolean} isFilled if the cell is filled in
 */
let drawSquare = function (oCanvas, x, y, gridCellSize, isFilled) {
    let bIsFilled = isFilled || false;
    let oDrawingTool = oCanvas.getContext('2d');
    if (bIsFilled) {
        oDrawingTool.fillRect(x, y, gridCellSize, gridCellSize);
    } else {
        oDrawingTool.strokeRect(x, y, gridCellSize, gridCellSize);
    }
};

/**
 * 
 * @param {*} oCanvas a canvas object to draw on
 * @param {Number} x x position in grid cells, zero is top
 * @param {Number} y y position in grid cells, zero is left
 * @param {Number} gridCellSize width of a grid cell in pixels
 */
let fillSquare = function (oCanvas, x, y, gridCellSize) {
    let oDrawingTool = oCanvas.getContext('2d');
    oDrawingTool.fillRect(x, y, gridCellSize, gridCellSize);
};

/**
 * 
 * @param {*} canvas 
 * @param {Number} gridWidth width of the grid in cells
 * @param {Number} gridCellSize width of a cell in pixels
 */
let redrawGrid = function (canvas, gridWidth, gridCellSize) {

    let x = 0, y = 0;
    let nPositionX = 0, nPositionY = 0;
    while (y < gridWidth) {
        x = 0;
        while (x < gridWidth) {
            nPositionX = x * gridCellSize;
            nPositionY = y * gridCellSize;
            drawSquare(canvas, nPositionX, nPositionY, gridCellSize);
            x = x + 1;
        };
        y = y + 1;
    };

};

export { drawSquare, redrawGrid };
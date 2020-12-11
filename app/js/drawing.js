/**
 * 
 * @param {*} oCanvas a canvas object to draw on
 * @param {Number} x x position in pixels, zero is top
 * @param {Number} y y position in pixels, zero is left
 * @param {Number} gridCellSize size of the cell in pixels
 * @param {DOMString} fillStyle the style to draw in, usually a color string
 */
let drawCell = function (oCanvas, x, y, gridCellSize, fillStyle) {
    let oDrawingTool = oCanvas.getContext('2d');
    if (fillStyle) {
        oDrawingTool.fillStyle = fillStyle;
        oDrawingTool.fillRect(x, y, gridCellSize, gridCellSize);
    }
    oDrawingTool.strokeRect(x, y, gridCellSize, gridCellSize);
};

/**
 * fills a square on the grid
 * @param {*} oCanvas a canvas object to draw on
 * @param {Number} x x position in grid cells, zero is top
 * @param {Number} y y position in grid cells, zero is left
 * @param {Number} gridCellSize width of a grid cell in pixels
 */
let fillCell = function (oCanvas, x, y, gridCellSize) {
    let nPositionX = x * gridCellSize;
    let nPositionY = y * gridCellSize;
    let sFillStyle = '#000000';
    drawCell(oCanvas, nPositionX, nPositionY, gridCellSize, sFillStyle);
};

/**
 * clears a square on the grid
 * @param {*} oCanvas a canvas object to draw on
 * @param {Number} x x position in grid cells, zero is top
 * @param {Number} y y position in grid cells, zero is left
 * @param {Number} gridCellSize width of a grid cell in pixels
 */
let clearCell = function (oCanvas, x, y, gridCellSize) {
    let nPositionX = x * gridCellSize;
    let nPositionY = y * gridCellSize;
    let sFillStyle = '#ffffff';
    drawCell(oCanvas, nPositionX, nPositionY, gridCellSize, sFillStyle);
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
            drawCell(canvas, nPositionX, nPositionY, gridCellSize);
            x = x + 1;
        };
        y = y + 1;
    };

};

export { drawCell, fillCell, clearCell, redrawGrid };
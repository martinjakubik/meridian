import { createCanvas, getStyles } from '../../lib/js/hypertext.js';
import { fillSquare, redrawGrid } from './drawing.js';
import { Grid } from './grid.js';

const CANVAS_ID = 'meridian-map';
const GRID_WIDTH = 16;
const GRID_CELL_SIZE = 30;

let oGrid = new Grid(GRID_WIDTH);

let oMeridianCanvas = createCanvas(CANVAS_ID, 'grid', 0);
redrawGrid(oMeridianCanvas, GRID_WIDTH, GRID_CELL_SIZE);
let oMeridianCanvasStyle = getStyles(oMeridianCanvas);
let oCanvasRectangle = oMeridianCanvas.getBoundingClientRect();
let oCanvasOffset = {
    horizontal: parseInt(oMeridianCanvasStyle.borderWidth, 10) + oCanvasRectangle.x,
    vertical: parseInt(oMeridianCanvasStyle.borderWidth, 10) + oCanvasRectangle.y
};

let getClosestCell = function (oOffset, GRID_CELL_SIZE, x, y) {

    let oClosestCell = {
        x: Math.floor((x - oOffset.horizontal) / GRID_CELL_SIZE),
        y: Math.floor((y - oOffset.vertical) / GRID_CELL_SIZE)
    };

    return oClosestCell;

};

let handleMeridianCanvasTapped = function (event) {

    let x = event.clientX;
    let y = event.clientY;
    let oClosestCell = getClosestCell(oCanvasOffset, GRID_CELL_SIZE, x, y);
    let nCellX = oClosestCell.x;
    let nCellY = oClosestCell.y;
    fillSquare(oMeridianCanvas, nCellX, nCellY, GRID_CELL_SIZE, true);
    oGrid.toggleCell(nCellX, nCellY);

};
oMeridianCanvas.onclick = handleMeridianCanvasTapped;
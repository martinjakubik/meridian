import { createCanvas, getStyles } from '../../lib/js/hypertext.js';
import { Grid } from './grid.js';

const CANVAS_ID = 'meridian-map';
const GRID_WIDTH = 16;
const GRID_CELL_SIZE = 30;

let oGrid = new Grid(GRID_WIDTH);

let oMeridianCanvas = createCanvas(CANVAS_ID, 'grid', 0);
oGrid.redraw(oMeridianCanvas, GRID_WIDTH, GRID_CELL_SIZE);
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
    let nXCell = oClosestCell.x;
    let nYCell = oClosestCell.y;
    oGrid.toggleCell(nXCell, nYCell);
    let nValue = oGrid.get(nXCell, nYCell);
    if (nValue === 1) {
        oGrid.fillCell(oMeridianCanvas, nXCell, nYCell, GRID_CELL_SIZE);
    } else {
        oGrid.clearCell(oMeridianCanvas, nXCell, nYCell, GRID_CELL_SIZE);
    }

};
oMeridianCanvas.onclick = handleMeridianCanvasTapped;
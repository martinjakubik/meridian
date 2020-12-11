import { createCanvas } from '../../lib/js/hypertext.js';
import { fillSquare, redrawGrid } from './drawing.js';

const CANVAS_ID = 'meridian-map';
const GRID_WIDTH = 16;
const GRID_CELL_SIZE = 30;

let oMeridianCanvas = createCanvas(CANVAS_ID, 'grid', 0);
redrawGrid(oMeridianCanvas, GRID_WIDTH, GRID_CELL_SIZE);

let handleMeridianCanvasTapped = function (event) {
    let x = event.clientX;
    let y = event.clientY;
    fillSquare(oMeridianCanvas, x, y, GRID_CELL_SIZE, true);
};
oMeridianCanvas.onclick = handleMeridianCanvasTapped;
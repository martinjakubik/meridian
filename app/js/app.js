import { CANVAS_HEIGHT, createButton, createCanvas, createCheckbox, createNumberInput, createSlider, setBlockVisibility } from '../../lib/js/hypertext.js';

console.log('meridian');

const CANVAS_ID = 'meridian-map';
const GRID_WIDTH = 10;

let drawSquare = function (oContext, x, y, size) {
    oContext.drawRect(x, y, x + size, y + size);
};

createCanvas(CANVAS_ID, 0);

let x = 0;
while (x < GRID_WIDTH) {
    x = x + 1;
};
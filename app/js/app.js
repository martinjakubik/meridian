import { createCanvas } from '../../lib/js/hypertext.js';
import { drawSquare } from './drawing.js';

console.log('meridian');

const CANVAS_ID = 'meridian-map';
const GRID_WIDTH = 16;
const GRID_PIXEL_SIZE = 30;

let oMeridianCanvas = createCanvas(CANVAS_ID, 0);

let x = 0, y = 0;
let nPositionX = 0, nPositionY = 0;
while (y < GRID_WIDTH) {
    x = 0;
    while (x < GRID_WIDTH) {
        nPositionX = x * GRID_PIXEL_SIZE;
        nPositionY = y * GRID_PIXEL_SIZE;
        drawSquare(oMeridianCanvas, nPositionX, nPositionY, GRID_PIXEL_SIZE);
        x = x + 1;
    };
    y = y + 1;
};
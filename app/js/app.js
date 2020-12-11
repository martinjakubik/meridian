import { createCanvas } from '../../lib/js/hypertext.js';
import { redrawGrid } from './drawing.js';

console.log('meridian');

const CANVAS_ID = 'meridian-map';
const GRID_WIDTH = 16;
const GRID_PIXEL_SIZE = 30;

let oMeridianCanvas = createCanvas(CANVAS_ID, 0);
redrawGrid(oMeridianCanvas, GRID_WIDTH, GRID_PIXEL_SIZE);
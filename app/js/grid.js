/**
 * initilazes a grid containing all zeros
 * @param {Number} nGridWidth the width of the grid in cells
 */
let makeGrid = function(nGridWidth) {
    let oGrid = [];
    for (let y = 0; y < nGridWidth; y++) {
        oGrid.push([]);
        for (let x = 0; x < nGridWidth; x++) {
            oGrid[y].push(0);
        }
    }
    return oGrid;
};

export { makeGrid };
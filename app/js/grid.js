class Grid {

    /**
     * initilazes a grid containing all zeros
     * 
     * @param {Number} gridWidth the width of the grid in cells
     */
    constructor(gridWidth) {

        this.gridModel = [];
        for (let y = 0; y < gridWidth; y++) {
            this.gridModel.push([]);
            for (let x = 0; x < gridWidth; x++) {
                this.gridModel[y].push(0);
            }
        }

    }

    toggleCell(x, y) {
        this.gridModel[y][x] = this.gridModel[y][x] === 0 ? 1 : 0;
    }

}

export { Grid };
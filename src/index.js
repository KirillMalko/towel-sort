// You should implement your task here.
module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    let arrNew = [];
    for (let i = 0; i <matrix.length; i++) {
        for (let n = 0; n < matrix.length; n++) {
            arrNew.push(matrix[i][n]);
        }
    }
    return arrNew;
}


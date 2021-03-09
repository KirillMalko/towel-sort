// You should implement your task here.
/*
module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
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
*/
module.exports = function towelSort(matrix) {
    let arrNew = [];
    if (!matrix || matrix.length === 0) { return [] }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) { matrix[i].map(e => arrNew.push(e)) }
        else { matrix[i].sort((a, b) => b - a).map(e => arrNew.push(e)) }
    }
    return arrNew;
}


let multi = (x: number, y: number): number[][] => {
    let tableau = new Array(3);
    for (let i = 0; i < 3; i++) {
        tableau[i] = new Array(3);
        for (let j = 0; j < 3; j++) {
            if (i === 0) {
                if (j === 0 || j === 2) tableau[i][j] = x;
                else tableau[i][j] = y;
            }
            if (i === 1) {
                if (j === 0 || j === 1) tableau[i][j] = y;
                else tableau[i][j] = x;
            }
            if (i === 2) {
                if (j === 0 || j === 1) tableau[i][j] = x;
                else tableau[i][j] = y;
            }
        }
    }
    return tableau;
};

console.log(multi(0, 1));

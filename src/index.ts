let exo1 = (x: number, y: number): number[][] => {
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

console.log(exo1(0, 1));

let tab =[0,3,-5,12,-18,-20];

let exo2_1 = (n, tab) => {
    let res = 0
    for(let i = n; i < tab.length; i++) {
        if(tab[i] > 0) res += tab[i]
    }
    return res
}

console.log(exo2_1(2,tab))

let exo2_2 = (tab) => {
    return tab.reverse()
}

console.log(exo2_2(tab))

const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
    const T = Number(input.shift())
    let result = '';
    for (let i = 0; i < T; i += 1) {
        const k = Number(input.shift());
        const n = Number(input.shift());
        let block = Array.from(Array(k + 1), () => Array(n+ 1).fill(1))
        
        for ( let j = 0; j < n; j ++ ) {
            block[0][j] = j + 1 ;
        }
        for (let x = 1; x <= k ; x++) {
            for (let y = 1; y <= n; y++) {
                block[x][y] = block[x - 1][y] + block[x ][y- 1];
            }
            
        }
        console.log( block[k][n - 1]);
    }
    
}
solution();


/*
-------1호-------2호--------3호--------4호--------5호
2층     1        4          10         20         35
-------1호-------2호--------3호--------4호--------5호
1층     1        3          6          10         15
-------1호-------2호--------3호--------4호--------5호
0층     1        2          3          4          5

arr[2][1] = arr[2][0]    +  arr[1][1]
arr[x][y] = arr[x][y-1]  +  arr[x-1][ y]
*/
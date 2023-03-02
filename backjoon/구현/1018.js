const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);



const whiteFirst = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW'
];

const blackFirst = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB'
];

function solution() {
    const minArr = [];
    let [m, n] = input.shift().split(' ').map((v) => +v);


    for (let i = 0; i + 7 < n; i++) {
        for (let j = 0; j + 7 < m; j++) {
            minArr.push(whitePaintCheck(i, j));
            minArr.push(blackPaintCheck(i, j));
        }
    }
    const result = Math.min(...minArr);
    console.log(result);
}

function whitePaintCheck (x, y) {
    let count = 0;
    for ( let i = y; i < y + 8; i ++) {
        for ( let j = x; j < x + 8; j ++) {               
            if (input[i][j] !== whiteFirst[i - y][j - x]) {
                count++;
            }
        }
    }
    return count;

}

function blackPaintCheck (x, y) {
    let count = 0;
    for ( let i = y; i < y + 8; i ++) {
        for ( let j = x; j < x + 8; j ++) {    
        
            if (input[i][j] !== blackFirst[i - y][j - x]) {
                count++;
            }
        }
    }
    return count;
}


solution()


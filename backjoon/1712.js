const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().trim().split(' ');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
    const a = Number(input[0]);
    const b = Number(input[1]);
    const c = Number(input[2]);
    if(b >= c) return -1;
    else return Math.floor(a / ( c - b) + 1);
}

console.log(solution());
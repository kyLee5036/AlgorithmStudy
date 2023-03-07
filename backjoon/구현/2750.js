const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
    input.shift();
    input.sort((a, b) => a - b);
    input.forEach((v) => {console.log(v)})

}


solution();


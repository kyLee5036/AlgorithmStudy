const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
    const n = input[0];
    const m = input[1].split(' ');
    let count = 0;
    for (let i = 0; i < m.length; i ++) {
        const num = Number(m[i]);
        if (isPrime(num)) {
            count++;
        }
    }
    console.log(count)
}

function isPrime (x) {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
};

solution();

const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().trim();
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
    const N = Number(input);
    for (let i = 1; i <= N; i++) {
        let sum = 0;
        let tmp = i;
        while (tmp) {
            sum += tmp % 10;
            tmp = Math.floor(tmp/10);
            
        }
        if (i + sum === N) {
            return i;
        }
    }
    return 0;
}


console.log(solution());

// 216
// 198

// 21 -> 16
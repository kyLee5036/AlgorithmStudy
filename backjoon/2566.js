const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().trim().split('\n')
    .map((a) => a.split(' ').map((b) => Number(b)));
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {

    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < input.length; i ++) {
        for (let j = 0; j < input[i].length; j ++) {
            if (max < input[i][j]) {
                max = input[i][j];
                location = Number(i + 1) + ' ' + Number(j + 1);
            }
        }
    }
    console.log(max);
    console.log(location);
}

solution();

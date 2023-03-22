const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().trim();
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
    let answer='1';
    let str = input.toLowerCase().replace(/[^a-z]/g, '');
    if( str.split('').reverse().join('') !== str ) answer = '0';
    console.log(answer);
}


solution();


const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().trim()
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

// ①
const xAlpahBet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
function solution() {
    let inputData = input;
    for (let alphabet of xAlpahBet) {
        inputData = inputData.split(alphabet).join("■");
    }
    return inputData.length
}

// ②
const xAlpahBetRegex = [/c=/g, /c-/g, /dz=/g, /d-/g, /lj/g, /nj/g, /s=/g, /z=/g];
function solution() {
    let inputData = input;
    for (const x of xAlpahBetRegex) {
        inputData = inputData.replace(x, '■');
    }
    return inputData.length;
}

console.log(solution())

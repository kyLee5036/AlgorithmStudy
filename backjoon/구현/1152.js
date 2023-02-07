const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
  const result = input[0].split(' ').filter((item) => item !== '').length
  console.log(result)
}

solution()

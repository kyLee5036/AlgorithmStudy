const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution(input) {
  const input1 = parseInt(input[0]);
  const input2 = input[1].split('');
  let sum = 0;
  for ( let i = 0; i < input1; i += 1) {
    sum += parseInt(input2[i])
  }
  return sum;
}

console.log(solution(input));

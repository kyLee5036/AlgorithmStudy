

const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const input = process.platform === 'win32' 
  ? require('fs').readFileSync(TEST_ENVIRONMENT).toString().split(' ')
  : require('fs').readFileSync(REAL_ENVIRONMENT).toString().split(' ');


function solution() {
  return  parseInt(input[0]) + parseInt(input[1]);
}

console.log(solution());
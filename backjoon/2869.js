const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().trim().split(' ');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);


function solution() {
  const A = input[0];
  const B = input[1];
  const V = input[2]
  return Math.ceil((V - B) / (A - B));

}

console.log(solution()) 

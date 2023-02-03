const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString()
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);



function solution(input) {
  let count = 0;
  const parseIntInput = parseInt(input);

  for ( let i = 1; i <= parseIntInput; i += 1) {
    let hundredNumber = Math.floor((i % 1000) / 100);
    let tenNumber = Math.floor((i % 100) / 10);
    let oneNumber = i % 10;
    if (i < 100) count++;
    if (i >= 100 && hundredNumber - tenNumber === tenNumber-oneNumber) count++;
    if (i >= 1000) count--;
  }
  return  count;
}

console.log(solution(input))

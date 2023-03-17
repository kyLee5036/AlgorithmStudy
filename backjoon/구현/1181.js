const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
	input.shift();
  let result = '';
  [...new Set(input)].sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b)
    } else {
      return a.length - b.length
    }
  }).forEach((v) => {
    result += v + '\n';
  });
  console.log(result);
  
}


solution();


// i
// im
// it
// no
// but
// more
// wait
// wont
// yours
// cannot
// hesitate

const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().trim().split('\n').map((v) => +v);
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {

	input.sort()
	let sum = input.reduce((a, b) => a + b, 0);
	console.log(sum / input.length);
	console.log(input[Math.floor(input.length / 2)]);
	// console.log(input, sum, input.length)
}


solution();

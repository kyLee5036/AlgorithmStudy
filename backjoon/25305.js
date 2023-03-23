const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().trim().split('\n').map((v) => v.split(' ').map((a) => +a));
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {

	const [N, k] = input[0];
	const x = input[1];
	x.sort((a, b) => b - a);
	console.log(x[k - 1])
}


solution();

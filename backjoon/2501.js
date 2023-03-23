const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().trim().split(' ').map((v) => +v);
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
	// console.log(input);
	const [N, K] = input;
	// console.log(N, K);
	let arr = [];
	for ( let i = 1; i <= N; i++) {
		if (N % i === 0) {
			arr.push(i);
		}
	}

	if (arr[K - 1]) {
		console.log(arr[K - 1]);
	} else {
		console.log(0);
	}


}

solution();

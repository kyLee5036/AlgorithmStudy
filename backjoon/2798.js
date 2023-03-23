const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
	const data = input;
	const [n, m] = data.splice(0, 1)[0].split(' ').map((v) => +v);
	const numbers = data[0].split(' ').map((v) => +v);
	let list = [];
	for (let i = 0; i < numbers.length; i++) {
			for ( let j = i + 1; j < numbers.length; j++) {
				for ( let k = j + 1; k < numbers.length; k++) {
					list.push(numbers[i] + numbers[j] + numbers[k]);
				}
			}
	}
	list.sort((a, b) => a - b);
	let max = Number.MIN_SAFE_INTEGER;
	for ( let i = 0 ; i < list.length; i++ ) {
		if (list[i] <= m) {
			max = list[i];
		}
	}
	console.log(max);
}

solution();
// 0 1 2
// 0 1 3
// 0 1 4
// 0 2 3
// 0 2 4
// 0 3 4


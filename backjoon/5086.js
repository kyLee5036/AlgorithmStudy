const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
	const data = input;
	let answer = '';
	for (let i = 0; i < data.length; i++) {
		const arr = data[i].split(' ').map((v) => Number(v));
		const [num1, num2] = arr;
		answer += isCalc(num1, num2);
	}
	console.log(answer);
}

function isCalc (num1, num2) {
	if (num1 > num2) {
		const list = [];
		for ( let i = 1; i <= num1; i ++) {
			if (Math.floor(num1 / i) * i === num1) {
				list.push(i); 
			}
		}
		if (list.indexOf(num2) > 0) return 'multiple' + '\n';
		else return 'neither' + '\n';
	} else if (num1 < num2) {
		const list = [];
		for ( let i = 1; i <= num2; i ++) {
			if (Math.floor(num2 / i) * i === num2) {
				list.push(i); 
			}
		}
		if (list.indexOf(num1) > 0) return 'factor' + '\n';
		else return 'neither' + '\n';
	} else {
		return '';
	}


}

solution();

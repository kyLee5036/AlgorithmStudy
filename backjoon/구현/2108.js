const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {

	const [N, ...numList] = input.map((v) => +v);
	const sortedNumArr = numList.sort((a, b) => a - b);
	const numMap = {};

	for (let num of sortedNumArr) {
		if (numMap[num]) {
			numMap[num] = numMap[num] + 1;
		} else {
			numMap[num] = 1;
		}
	}

	let hitMaxNum = Math.max.apply(null, Object.values(numMap));
	let hitMaxNumArr = [];
	let hitMaxNumResult = 0;
	for (let numKey in numMap) {
		if (numMap[numKey] === hitMaxNum) {
			hitMaxNumArr.push(numKey);
		}
	}

	if (hitMaxNumArr.length > 1) {
		hitMaxNumArr = hitMaxNumArr.sort((a, b) => a - b);
		hitMaxNumResult = hitMaxNumArr[1];
	} else {
		hitMaxNumResult = hitMaxNumArr[0];
	}

	const avg = Math.round(numList.reduce((acc, num) => (acc + num), 0) / N);
	const center = numList[Math.floor(numList.length / 2)];
	const maxSubMin = sortedNumArr[sortedNumArr.length - 1] - sortedNumArr[0];

	console.log(avg === -0 ? 0 : avg);
	console.log(center);
	console.log(hitMaxNumResult);
	console.log(maxSubMin);

}


solution();

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

// // 통계학
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// input = input.slice(1, input.length);

// function getMean(arr){
//     return Math.round(arr.reduce((sum, curr) => sum + curr, 0)/arr.length);
// }
// function getMedian(arr){
//     arr = arr.sort((a,b) => a-b);
//     return arr[Math.floor(arr.length/2)];
// }

// function getMode(arr){
//     let map = new Map();
//     arr.forEach(element => {
//         if(map.has(element)) map.set(element, map.get(element)+1);
//         else map.set(element, 1);
//     });

//     const minValue = Math.max.apply(null, [...map.values()]);
//     let minKey = [];
//     map.forEach((value, key) => {
//         if(value === minValue) minKey.push(key);
//     });
    
//     return minKey.length === 1 ? minKey[0] : minKey.sort((a,b) => a-b)[1];
// }

// function getRange(arr){
//     return Math.max.apply(null, arr) - Math.min.apply(null, arr);
// }

// let result = [];
// result.push(getMean(input));
// result.push(getMedian(input));
// result.push(getMode(input));
// result.push(getRange(input));

// console.log(result.join('\n'));

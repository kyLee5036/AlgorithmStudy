const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().trim();
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution(str) {
  const inputData = parseInt(str);
  let answer = 1;
  let count = 1;
  while(inputData > count) {
    count += 6 * answer;
    answer++;
  }
  return answer

}

// console.log(solution(1)) // 1
// console.log(solution(2)) // 2
// console.log(solution(7)) // 2
// console.log(solution(8)) // 3
// console.log(solution(19)) // 3
// console.log(solution(20)) // 4
// console.log(solution(37)) // 4
console.log(solution(input)) // 5


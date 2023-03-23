const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
	const N = input.shift();
  const X = input;
  
  let x = X.join('').split(' ').map((v) => Number(v));
  const set = [...new Set(x)].sort((a, b) => a - b)
  
  let object = {};
  set.forEach((v, i ) => {
    object[v] = i;
  });
  
  let answer = [];
  x.forEach((v, i) => {
    answer.push(object[v])
  })
  console.log(answer.join(' '))

}



solution();


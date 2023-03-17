const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
	input.shift();
  let result = '';
  const changeInput = input.map((v) => v.split(' ').map((v) => Number(v)));
  changeInput.sort((a, b) => {
    if (a[0] !==  b[0]) return a[0] - b[0];
    else return a[1] - b[1]; 
  }).forEach((a) => {
    result += `${a.join(' ')}\n`
  })
  console.log(result);


  
}


solution();


// 5
// 3 4
// 1 1
// 1 -1
// 2 2
// 3 3

// 1 -1
// 1 1
// 2 2
// 3 3
// 3 4


// -5 -4
// -3 -5
// -1 -3

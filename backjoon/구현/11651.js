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
    if (a[1] !==  b[1]) return a[1] - b[1];
    else return a[0] - b[0]; 
  }).forEach((a) => {
    result += `${a.join(' ')}\n`
  })
  console.log(result);


  
}


solution();


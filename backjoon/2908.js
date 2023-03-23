const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
  const inputData = input[0].split(' ');
  const result = [];
  for (let i = 0; i < inputData.length; i ++) {
    const hundreds = Math.floor((inputData[i] / 100) % 100).toString();
    const ten = Math.floor((inputData[i] / 10) % 10).toString();
    const s = Math.floor((inputData[i] % 10)).toString();
    const str = s + ten + hundreds;
    result.push(str);
  }
  if (result[0] < result[1]) {
    console.log(result[1])
  } else {
    console.log(result[0])
  }
  
}

solution()

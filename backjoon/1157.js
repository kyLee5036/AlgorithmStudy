const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
  
  let lowStr = input[0].toUpperCase();
  let obj = {};

  for(let i = 0; i < lowStr.length; i ++) {
    if(obj[lowStr[i]] === undefined) {
      obj[lowStr[i]] = 1; 
    } else {
      obj[lowStr[i]] += 1
    }
  }
  let maxChar = '';
  let maxCount = 0;
  for (const data in obj ) {
    if (obj[data] > maxCount) {
      maxCount = obj[data];
      maxChar = data;
      isDuplicated = false;
    } else if (obj[data] === maxCount) {
      maxChar = '?'
    }
  }
  console.log(maxChar);
}

solution()

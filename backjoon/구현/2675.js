const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
  
  const num1 = input.shift();
  for (let i = 0; i < num1; i++) {
    let result = '';
    const [num2, str] = input[i].split(" ");
    for (let j = 0; j < str.length; j++) {
      result += str[j].repeat(num2);
    }
      
    console.log(result);
  }
}

solution()

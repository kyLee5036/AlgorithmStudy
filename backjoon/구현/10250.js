const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

// 1011
function solution() {
  const inputData = input.slice(1);
  let result = '';
  for (let i = 0; i < inputData.length; i += 1) {
    const arr = inputData[i].split(' ');
    // console.log(arr);
    const H = arr[0];
    const W = arr[1];
    const N = arr[2];
    const floorNumber = Math.ceil(N / H);
    let floorHight = 0;
    if (N % H == 0) floorHight = H
    else floorHight = N % H
  
    result += `${floorHight}${floorNumber < 10 ? `0${floorNumber}` : `${floorNumber}`}\n`;
  }
  return result;

}

console.log(solution());

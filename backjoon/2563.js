const { count } = require('console');

const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
  const data = input.splice(1);
  let answer = 0;
  let arr = Array.from(Array(100), () => Array(100).fill(false));
  // console.log(arr);
  for ( let i = 0 ; i < data.length; i++) {
    const [x, y] = data[i].split(' ').map((v) => Number(v));
    for ( let i = x; i < x + 10; i ++ ) {
      for ( let j = y; j < y + 10; j ++ ) {
        if (arr[i][j]) {
          continue;
        }
        arr[i][j] = true;
        answer++;
      }
    }
  }


  console.log(answer);
}

solution();

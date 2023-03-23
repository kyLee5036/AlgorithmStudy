const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
  const data = input.slice(1);
  let answer = '';
  for ( let i = 0 ; i < data.length; i ++ ) {
    answer = data[i].charAt(0) + data[i].charAt(data[i].length - 1);
    console.log(answer);
    answer = '';
  }
}

solution();

const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {

  const max = Math.max(...input.map((v) => v.length));
  let answer = '';
  for ( let i = 0 ; i < max; i ++ ) {
    for ( let j = 0 ; j < input.length; j ++ ) {
      answer += input[j][i] || '';
    }
  }
  console.log(answer);
}

solution();

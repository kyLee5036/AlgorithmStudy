const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().split('\n').map((v) => v.split(' '));
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
    const [n, m] = input.shift(1).map((v) => Number(v));
    let arr = Array.from(Array(n), () => Array(m).fill(0));
    
    const result = input.map((v) => {
      return v.map((a) => Number(a))
    });
    // console.log(n, m)
    // console.log(arr);
    // console.log(result);
    let answer = '';

    for ( let i = 0; i < n; i ++) {
      for ( let j = 0; j < m; j ++ ) {
        arr[i][j] = result[i][j] + result[i + n][j]
        answer += result[i][j] + result[i + n][j] + ' ';
      }
      answer += '\n'
    }

    console.log(answer);

    // let arr = Array.from(Array(n), () => Array(m).fill(0));
    // console.log(arr);
    // console.log(input)

    
}

solution();
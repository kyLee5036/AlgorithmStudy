const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString();
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
    let N = Number(input);
    let count = 0;
    while ( true ) {

        if (N % 5 === 0) {
            console.log(N / 5 + count);
            break;
        }
        if ( N <= 0 ) {
            console.log(-1);
            return;
        }
        
        N -= 3
        count += 1;

    }
}

solution()

/*

18 -> 5, 5, 5, 3
9 -> 3,3, 3
11 -> 5, 3, 3



*/
const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString();
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
    let N = Number(input);
    let count = 0;
    let list = [];
    while ( true ) {
        if (N % count === 0) {
            N = N / count
            list.push(count);
            count = 1;
        } 
        count++; 

        if ( N <= 1) {
            break;
        }
    }
    
    list.splice(1).map((v) => {
        return console.log(v);
    })

    
}

solution();

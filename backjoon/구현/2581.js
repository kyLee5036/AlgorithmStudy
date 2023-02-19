const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
    const n = Number(input[0]);
    const m = Number(input[1]);
    let list = [];

    for (let i = n; i <= m; i ++) {
        if (isPrime(i)) {
            list.push(i)
        }
    }

    if (list.length === 0 ) {
        console.log(-1)
    } else {    
        const min = Math.min(...list);
        const sum = list.reduce((p, c) => p + c);
        console.log(sum)
        console.log(min)
    }

    
}

function isPrime (x) {
	if( x == 1 ) return false;
	for ( let i = 2; i < x; i++ ) {
		if ( x % i == 0 ) {
            return false;
        }
    }
	return true;
}

solution();

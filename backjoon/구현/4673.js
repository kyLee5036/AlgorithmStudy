const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().split(' ');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
    const selfNumer = []
    for (let i = 1; i <= 10000; i ++) {
        if ( i < 10) selfNumer.push(i + i);
        else selfNumer.push(selfNumberFunc(i))
    }
    for (let i = 0; i <= 10000; i ++) {
        if (i === 0) continue;
        else if (!selfNumer.includes(i)) console.log(i);   
    }

}

function selfNumberFunc(n) {
    let result = 0;
    const strN = String(n);
    strN.split('').map((v , i) => {
        result +=  Number(v);
    });
    return result + n;
}

// 17
// 18
// 1
// 2
// 3
// 4

solution();

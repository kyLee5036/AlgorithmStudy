const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().trim();
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {

    const N = Number(input);
    
    let current = 666;
    let count = 0;
    while (true) {
        if (String(current).includes('666')) {
            count++;
            if (count === N) {
                console.log(current);
                break;

            }
        }
        current++;
    }
}


solution();



/**\

1  0666 -> 666
2  1666
3  2666
4  3666
5  4666
6  5666
7  6666 -> 6660
8  6661
9  6662
10  6663
11 6664
12 6665
13 66601
14 666


 */
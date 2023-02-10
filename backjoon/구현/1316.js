const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

// ccazzzzbb => true cazb
// aabbbccb => false

function solution() {
    const arr = input.slice(1);
    let count = 0;
    for (let x of arr) {
        if ( x === isGroup(x).join('')) {
            count++
        }
    }

    function isGroup(str) {
        let newArr = [];
        for ( let i = 0; i < str.length; i++ ) {
            //값이 없으면 넣어주기
            if (!newArr.includes(str[i])) newArr.push(str[i]);
            // 연속된 값이면 넣어주기
            if (str[i - 1] === str[i]) newArr.push(str[i]);

            // happy -> happy
            // abab -> ab (뒤에 있는(인덱스가 2 또는 3)인 ab는 이미 값이 존재하고 연속된 숫자이니까 넣어주지 않는다.)
            

        }
        return newArr;
    }
    return count;
}


console.log(solution())
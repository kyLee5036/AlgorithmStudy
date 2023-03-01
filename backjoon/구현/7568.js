const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
    return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
    input.shift();
    let list = [];
    for ( let i = 0; i < input.length; i ++ ) {
        let count = 1;
        let iKg = Number(input[i].split(' ')[0]);
        let iCm = Number(input[i].split(' ')[1]);
        for ( let j = 0; j < input.length; j ++ ) {
            if (i === j) continue;
            
            let jKg = Number(input[j].split(' ')[0]);
            let jCm = Number(input[j].split(' ')[1]);
            if (iKg < jKg && iCm < jCm) {
                count++;
            }
            
        }
        list.push(count);
        
    }
    console.log(list.join(' '));
    

}
// 2 2 1 3 1 1

solution()

// 5
// 55 185
// 58 183
// 88 186
// 60 175
// 46 155

// 2 2 1 2 5
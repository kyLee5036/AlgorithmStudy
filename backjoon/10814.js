const TEST_ENVIRONMENT = '../input.txt';
const REAL_ENVIRONMENT = '/dev/stdin';

const fileRead = (kinds) => {
  return require('fs').readFileSync(kinds).toString().trim().split('\n');
}
const input = process.platform === 'win32' ? fileRead(TEST_ENVIRONMENT) : fileRead(REAL_ENVIRONMENT);

function solution() {
	input.shift();
  
  const changeInput = input.map((v, b) => {
    const [age, name] = v.split(' ');
    const newAge = Number(age);
    return {
      age: newAge,
      name
    }
  })

  let result = '';
  changeInput.sort((a, b) => {
    if (a.age === b.age) {
      return a.name - b.name
    } else {
      return a.age - b.age
    }
  }).forEach((v) => {
    result+= `${v.age} ${v.name}\n`
  });
  console.log(result);
  
}



solution(input);


// 20 Sunyoung
// 21 Junkyu
// 21 Dohyun
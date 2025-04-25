function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i ++){
        if(n % i === 0){
            answer += i;
        }
    }
    return answer;
}

const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
const sum = solution(n);
console.log(sum)

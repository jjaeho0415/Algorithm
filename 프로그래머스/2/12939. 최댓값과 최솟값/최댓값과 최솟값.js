function solution(s) {
    let answer = '';
    const arr = s.split(" ").map(Number);
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i < arr.length; i ++){
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i]
        }
    }
    answer += `${min} ${max}`
    return answer;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
console.log(solution(input))
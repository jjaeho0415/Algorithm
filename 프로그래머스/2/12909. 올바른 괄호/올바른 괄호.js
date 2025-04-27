function solution(s){
    var answer = true;
    let stack = [];
    for(i of s){
        if(i === "("){
            stack.push(i);
        }
        else{
            if(stack.length === 0){
                return false;
            }
            stack.pop();
        }
    }
    answer = stack.length === 0;
    return answer;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
console.log(solution(input))
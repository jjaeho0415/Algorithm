function solution(n) {
    let answer = 0;
    let start = 1;
    while(true){
        let sum = 0;
        for(let i = start; i <= n; i ++){
            sum += i;
            if(sum === n){
                answer ++;
                break;
            }
            else if(sum > n){
                break;
            }
        }
        start ++;
        if(start > n){
            break;
        }
    }
    return answer;
}
function solution(progresses, speeds) {
    let answer = [];
    const days = progresses.map((progress, index) => {
        return Math.ceil((100 - progress) / speeds[index])
    })
    
    let count = 1;
    let currentDay = days[0];
    
    for(let i = 1; i < days.length; i ++) {
        if(days[i] <= currentDay){
            count ++;
        }
        else{
            answer.push(count);
            count = 1;
            currentDay = days[i];
        }
    }
    answer.push(count)
    return answer
}
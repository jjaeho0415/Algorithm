function solution(participant, completion) {
    const hash = new Map();
    
    participant.forEach((item) => {
        hash.set(item, (hash.get(item) || 0) + 1);
    })
    
    completion.forEach((item) => {
        hash.set(item, hash.get(item) - 1);
    })
    for(let [key, value] of hash){
        if(value > 0){
            return key
        }
    }
}
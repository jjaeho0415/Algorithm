function solution(s) { // 01110
    let changeCnt = 0; 
    let zeroCount = 0; 

    while (s !== "1") {
        let onlyOnes = ""; 
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '0') {
                zeroCount++;
            } else {
                onlyOnes += s[i];
            }
        }
        // 길이를 2진수로 변환
        s = onlyOnes.length.toString(2);
        changeCnt++;
    }

    return [changeCnt, zeroCount];
}
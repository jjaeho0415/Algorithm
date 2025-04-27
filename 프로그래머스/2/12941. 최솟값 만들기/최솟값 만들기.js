function solution(A,B){
    var answer = 0;
    // 오름차순 정렬
    A.sort((a, b) => a - b);
    // 내림차순 정렬
    B.sort((a, b) => b - a);
    let i = 0;
    // A는 인덱스 처음부터(작은 값부터) B는 인덱스 끝부터(큰 값부터) 곱함
    while(i < A.length){
        answer += A[i] * B[i];
        i ++;
    }

    return answer;
}
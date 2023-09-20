function solution(arr)
{
    var answer = [];
    arr.map((res) => {
        if(res != answer[answer.length - 1]) {
            answer.push(res)
        }
    })
    
    return answer;
}
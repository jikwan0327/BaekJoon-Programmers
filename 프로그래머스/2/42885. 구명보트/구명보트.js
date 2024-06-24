function solution(people, limit) {
    var answer = 0;
    let i = 0;
    let j = people.length - 1;
    let arr = people.sort((a,b) => a - b)
    
    while(i <= j) {
        if(arr[i] + arr[j] <= limit) {
            i++
        }
        j--;
        answer++;
    }
           
    return answer;
}
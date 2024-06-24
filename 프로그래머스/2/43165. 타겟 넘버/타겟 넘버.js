function solution(numbers, target) {
    var answer = 0;
    function dfs(result, depth) {
        if(numbers.length == depth) {
            if(result == target) answer++;
            return;
        }
        dfs(result + numbers[depth], depth+1)
        dfs(result - numbers[depth], depth+1)
    }
    dfs(0, 0)
    return answer;
}
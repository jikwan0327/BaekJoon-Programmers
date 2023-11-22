const fs = require('fs')
const [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)
let arr = new Array(n).fill(0).map((_, idx) => idx+1)
let visited = new Array(n).fill(false)
let selected = []

let answer = ''
function dfs(arr, depth) {
    if(depth == m) {
        let result = []; // 순열(permutation) 결과 저장 테이블
        for (let i of selected) result.push(arr[i]);
        for (let x of result) answer += x + " "; // 계산된 순열을 실질적으로 처리하는 부분
        answer += "\n";
        return;
    }
    for(let i = 0; i < arr.length; i++) {
        if (visited[i]) continue; // [중복을 허용하지 않으므로] 이미 처리 된 원소라면 무시
        selected.push(i); // 현재 원소 선택
        visited[i] = true; // 현재 원소 방문 처리
        dfs(arr, depth + 1); // 재귀 함수 호출
        selected.pop(); // 현재 원소 선택 취소
        visited[i] = false; // 현재 원소 방문 처리 취소
    }
}

dfs(arr, 0)
console.log(answer)
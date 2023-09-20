function solution(board, moves) {
    var answer = 0;
    let arr = []
    moves.map((res) => {
        let a;
        for(let i = 0; i < board.length; i++) {
            a = board[i][res-1];
            if(board[i][res-1] != 0) {
                board[i][res-1] = 0;
                break;
            }
        }
        
        if(a != 0) {
            if(arr[arr.length - 1] === a) {
                arr.pop();
                answer += 1;
            } else {
                arr.push(a);
            }
        }
    })
    
    return answer * 2;
}
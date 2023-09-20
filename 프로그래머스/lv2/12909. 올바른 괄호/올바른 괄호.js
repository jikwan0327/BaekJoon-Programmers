function solution(s){
    var answer = true;
    let arr = []

    s.split('').map((res) => {
        if(res == "(") {
            arr.push(res)
        } else if(res == ")") {
            if(arr.length == 0) {answer = false}
            arr.pop()
        }
    })
    
    if(arr.length != 0) {
        answer = false
    }
    
    return answer;
}
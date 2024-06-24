function solution(brown, yellow) {
    var answer = [];
    let arr = []
    for(let i = 2; i < brown + yellow; i++) {
        if((brown + yellow) % i == 0) {
            arr.push(i)
        }
    }
    
    while(arr.length > 0) {
        let w, h;
        if(arr.length == 1) {
            w = arr[0] - 2
            h = arr[0] - 2
        } else {
            w = arr.pop() - 2
            h = arr.shift() - 2
        }
        
        if(w * h == yellow) return answer = [w+2, h+2]
    }
    
    return answer;
}
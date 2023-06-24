function solution(n) {
    let index = 2;
    let arr = []
    while(n!==1) {
        if(n%index == 0) {
            arr.push(index)
            n /= index;
            index = 2
        } else {
            index += 1
        }
    }
    return Array.from(new Set(arr))
}
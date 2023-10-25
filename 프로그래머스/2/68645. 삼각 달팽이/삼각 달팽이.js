function solution(n) {
    var answer = [];
    let s = 0;
    let x = 0;
    let y = 0;
    let direction = "bottom"
    for(let i = 1; i <= n; i++) {
        s += i;
    }
    const arr = new Array(n)
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(i+1).fill(0)
    }
    
    arr[0][0] = 1
    for(let i = 2; i <= s; i++) {
        if(direction == 'bottom') {
            y++
            if(y == n || arr[y][x] != 0) {
                y--;
                x++;
                direction = 'right'
                arr[y][x] = i
            } else {
                arr[y][x] = i
            }
        } else if(direction == 'right') {
            x++
            if(x == n || arr[y][x] != 0) {
                y--;
                x-=2;
                direction = 'top'
                arr[y][x] = i
            } else {
                arr[y][x] = i
            }
        } else if(direction == 'top') {
            y--;
            x--;
            if(arr[y][x] != 0) {
                x++;
                y+=2;
                direction = 'bottom'
                arr[y][x] = i
            } else {
                arr[y][x] = i
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        answer = [...answer, ...arr[i]]
    } 

    return answer;
}
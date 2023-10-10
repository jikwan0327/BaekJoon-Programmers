function solution(priorities, location) {
    let answer = 0;
    let queue = []
    let prioritie = priorities.map((res, idx) => ({res, idx}))
    while(prioritie.length > 0) {
       let a = prioritie.shift();
       let b = prioritie.findIndex(res => res.res > a.res);
       if(b != -1) {
           prioritie.push(a)
       } else {
           queue.push(a.res)
           if(a.idx == location) answer = queue.length;
       }
    }
    console.log(queue)
    return answer;
}
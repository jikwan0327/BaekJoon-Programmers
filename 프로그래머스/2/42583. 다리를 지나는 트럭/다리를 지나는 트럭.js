function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = new Array(bridge_length).fill(0)
    while(!(truck_weights.length == 0 && bridge.length == 0)) {
        bridge.shift()
        if(truck_weights.length) {
            if(bridge.reduce((arr, a) => arr + a)+truck_weights[0] <= weight) {
                bridge.push(truck_weights.shift())       
            } else {
                bridge.push(0)
            }
        }
        answer++;
    }
    return answer;
}
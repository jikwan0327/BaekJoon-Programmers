function solution(participant, completion) {
    const object = new Map()
    participant.map(res => {
        if(object.has(res)) {
            object.set(res, object.get(res) + 1)
        } else {
            object.set(res, 1)
        }
    })
    completion.map(res => {
        object.set(res, object.get(res) - 1)
    })
    for(let value of object) {
        if(value[1] == 1) {
            return value[0]
        }
    }
}
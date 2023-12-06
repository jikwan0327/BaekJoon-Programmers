function solution(new_id) {
    var answer = '';
    answer = new_id.toLowerCase()
    const regex1 = /[^a-z0-9-_.]/g
    answer = answer.replace(regex1, '')
    const regex3 = /[.]+/g
    answer = answer.replace(regex3, '.')
    const regex4 = /^[.]/g
    const regex2 = /[.]$/g
    answer = answer.replace(regex4, '')
    answer = answer.replace(regex2, '')
    if(answer.length == 0) answer = 'a'
    if(answer.length >= 16) {
        answer = answer.slice(0, 15)
        answer = answer.replace(regex2, '')
    }
    if(answer.length <= 2) {
        answer += answer[answer.length-1] + answer[answer.length-1]
        answer = answer.slice(0, 3)
    }
    console.log(answer)
    return answer
}
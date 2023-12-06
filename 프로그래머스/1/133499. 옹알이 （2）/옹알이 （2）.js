function solution(babbling) {
    var answer = 0;
    const regex = /^(aya(?!aya)|ye(?!ye)|woo(?!woo)|ma(?!ma))+$/
    babbling.map(res => {
        if(regex.test(res)) answer++
    })
    return answer;
}
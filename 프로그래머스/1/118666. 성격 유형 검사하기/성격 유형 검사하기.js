function solution(survey, choices) {
    var answer = [];
    const object = new Map([
        ["RT", 0], ["CF", 0], ["JM", 0], ["AN", 0], 
        ["TR", 0], ["FC", 0], ["MJ", 0], ["NA", 0]
    ])
    
    survey.map((res, idx) => {
        object.set(res, object.get(res) + choices[idx] - 4)
    })
        
    if(object.get('RT') - object.get('TR') <= 0) {
        answer.push('R')
    } else {
        answer.push('T')
    }
    
    if(object.get('CF') - object.get('FC') <= 0) {
        answer.push('C')
    } else {
        answer.push('F')
    }
    
    if(object.get('JM') - object.get('MJ') <= 0) {
        answer.push('J')
    } else {
        answer.push('M')
    }
    
    if(object.get('AN') - object.get('NA') <= 0) {
        answer.push('A')
    } else {
        answer.push('N')
    }
    
    return answer.join('');
}
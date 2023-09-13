function solution(today, terms, privacies) {
    [y, m, d] = today.split('.').map(Number)

    let objectTerm = {}
    terms.map((res) => {
        [key, value] = res.split(' ')
        objectTerm = Object.assign({[key]: Number(value)}, objectTerm)
    })
    
    let privacyArray = privacies.map(res => {
        [date, type] = res.split(' ');
        [year, month, day] = date.split('.');
        let finalMonth = Number(month) + objectTerm[type];
        if(finalMonth > 12) {
            year = Number(year) + parseInt(finalMonth / 12)
            month = parseInt(finalMonth % 12)
        } else {
            month = finalMonth
        }
        return (`${year}.${String(month).padStart(2, '0')}.${day}`)
    })
        
    var answer = privacyArray.map((res, idx) => {
        [year, month, day] = res.split('.').map(Number)
        
        if(year * 28 * 12 + month * 28 + day <= y * 28 * 12 + m * 28 + d) {
            return idx + 1
        }
         
        // if(year < y) {
        //     return idx + 1;
        // } else {
        //     if(month < m) {
        //         return idx + 1;
        //     }
        //     else {
        //         if(day >= d) {
        //             return idx + 1;
        //         } else {
        //             return 0;
        //         }
        //     }
        // }
    })

    
    return answer.filter(res => !!res);
}
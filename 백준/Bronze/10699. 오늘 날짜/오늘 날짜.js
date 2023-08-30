const date = new Date();
console.log(`${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}-${(date.getDate() + 1).toString().padStart(2, '0')}`)
function solution(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
  
      if (i % 3 === 1 || i % 5 === 1) {
        sum += i;
      }
    }
    return sum;
}

console.log( solution(10) );
console.log( solution(20) );
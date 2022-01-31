function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n > 0)
    return isEven(n - 2);
  else 
    return isEven(-n);
 }
 const isOdd


for (let i = 0; i <= 100; i++) {
   var solution = '';
   if (i % 3 == 0)
     solution += 'Fizz';
   if (i % 5 == 0)
   solution += 'Buzz';
   console.log(solution || i);
 }
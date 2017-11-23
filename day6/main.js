function prime(num) {

  if (num === 2) {
    return 'The Number is prime';
  }
  else if(num > 1){
    for (var i = 2;  i < num; i++) {

      if (num % i !== 0 ) {
        return 'The Number is prime';
      }

      

      else {
        return "The Number isn't prime";
      }
    }
  }
  else {
    return "The Number isn't prime";
  }

}

console.log(isPrime(9));
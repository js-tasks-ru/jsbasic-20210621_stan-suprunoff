function factorial(n) {
  let result = 1;
  
  if (n == 0 || n == 1) {
    return result;

  } else {
    for (let i = n; i >= 1; i--){
      result = result * i;
    }

    return result;
  }  
}

factorial(5);
factorial(4);
factorial(7);

// let n = +prompt('введите число факториала');

// if(isNaN(n)) {
//    prompt('введите корректное число');
  
//    } else { 
//     result = +factorial(n);
//     };

// alert(`Факториал ${n} = ${result}`);
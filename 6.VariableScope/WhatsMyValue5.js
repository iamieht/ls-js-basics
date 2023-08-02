function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction(); // ReferenceError as a in line 6 shadows the variable a declared in line 2 and we are trying to access it before it's declared in line 5

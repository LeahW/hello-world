// Fibonacci Sequence function

  function fib(num) {
  if (num <= 2) {
  return 1;
  };

  { return fib(num-1) + fib(num-2);
  };
  };

// Use Recursion to fix Capitalization errors in an Array

  // Our array of messy words
  var capitals = ["berlin", "parIs", "MaDRiD"];

  // Capitalize function
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  // Our recursive function
  function fixLetterCase(array, i) {    
    // Base case
    if (i === array.length) {
      return;
    } 
    // Action
    array[i] = capitalize(array[i]);
    // Recursive case
    return fixLetterCase(array, i + 1);
  }

  // Here is our function call
  fixLetterCase(capitals, 0);

  console.log(capitals);
  console.log(capitals.length);
  
  // Same as above, but with nested arrays
  
    var capitals = [ ["berlin", "parIs", "MaDRiD"], 
                 ["monTEvideo", "BrASiLia"],
                 ["dElhi", "toKYo", "BeiJing"],
                 ["CanBerra"],
                 ["kiGaLi", "pretoRIA"] ];

  // Capitalize function
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  // Our recursive function
  function fixLetterCase(array, x, y) {
    if (y === array.length) {
      return;
    }
    else if (x === array[y].length) {
      return fixLetterCase(array, 0, y + 1);
    }
    else {
      array[y][x] = capitalize(array[y][x]);
      return fixLetterCase(array, x + 1, y);
    }	
  }

  fixLetterCase(capitals, 0, 0);

  console.log(capitals);
  
  // Using Recursion to find Multiples
  
      var multiples = [];

  function multiplesOf(base, i) {
    // Base case
    if (i === 1) {
        multiples[i-1] = base;
        console.log(multiples);
  	// Write the array multiples to the console
    }
    // Recursive case
    else {
      multiples[i - 1] = base * i;
      return multiplesOf(base, i-1);
	  // Add a recursive function call
    }	
  }
  multiplesOf(4, 3);

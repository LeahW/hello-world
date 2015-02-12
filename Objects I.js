var james = {
    job:"programmer",                                                               // literal notation
    married:false

   
    
    
};

function Person(job, married) {
    this.job = job;                                                                 // Constructor notation (creates Class)
    this.married = married;
}

function Person(job, married) {
    this.job = job;
    this.married = married;                                                     // Using function as an Object property
    this.speak = function() {console.log("Hello!")}
  
    
}

var user = new Person("Codecademy Student",false);                              // Calling function on newly created object
user.speak();

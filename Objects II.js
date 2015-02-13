var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

var x = this.english;
// print hello in the 3 different languages
for (var x=1 in languages) { 
    if (typeof languages[x] === 'string') {console.log(languages[x])}}
    
    /*Examine the languages object. Three properties are strings, whereas one is a number.

Use a for-in loop to print out the three ways to say hello. In the loop, you should check to see if the property value is a string so you don't accidentally print a number.

?
Hint
You should use an if statement in combination with the typeof operator to figure out whether or not something is a "string". If it's a "string", then print it!

Make sure you're checking the property value (e.g., "Hello!") and not the property name (e.g., english). Recall that if we save a property name to a variable, we can access the value associated with that name using bracket notation. */

// Build a Cash Register w/ employee discount

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember('me',20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function(employee) {
        this.total-=((employee.discountPercent/100) * this.total); },
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));

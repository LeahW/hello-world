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

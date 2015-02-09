var text = "Leah saw a boy named Liam jump over Leah's lazy Labrador."
var myName = "Leah";
var hits = [];

for (i=0; i < text.length; i++) {
    if (text[i]==="L") {
        for(j = i; j < (myName.length+i); j++)
        {
            hits.push(text[j]);
        }
    }
}
if (hits === []) {
    console.log("Your name wasn't found!");}
    else {console.log(hits);}

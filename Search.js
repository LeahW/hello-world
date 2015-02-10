var friends = {};
    friends.bill = {
        firstName:'Bill',
        lastName:'Gates',
        number:1,
        address: ['One MS Way', 'Redding', 'WA']
        };
    friends.steve = {
        firstName:'Steve',
        lastName:'Jobs',
        number:2,
        address: ['One Infinite Loop', 'Cupertino', 'CA']
        };
    
    var list = function() {
        for (firstName in friends) { console.log (firstName) }
        
    var search = function(name) {
        for (name in friends) {console.log (firstName, lastName, number, address); return(firstName, lastName, number, address)}
    }}
    
    search('Bill');
    list()
 
    

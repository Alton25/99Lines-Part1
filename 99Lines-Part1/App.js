
( function() { 
    
     var friends= ['Rod', 'Courtney', 'Whitey', 'Sierra', 'Shannon'];
  var music = function(lineNum){
    return lineNum + (lineNum == 1 ? " line " : " lines ")
    };
        for(let s = 0; s < friends.length; s++ ){
            console.log(friends[s] + ':');
        for( let num = 99; num > 0; num--){

            console.log(music(num) + ' of code in the file, ' + music(num) +  ' of code; ' + friends[s] + ' strikes one out, clears it all out, ' + music(num - 1) + ' of code in the file!');
            }
            
        }
    
    
})()

    
    

    
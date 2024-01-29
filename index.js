// Bottles of Beer

 var output = [];
    var number = 99 ;

function beer(){
   
    
while ( number > 0){
    if (number === 1) {
      output.push(number + " bottle of beer on the wall, " + number + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
    } 
    else if (number === 2) {
      output.push(number + " bottles of beer on the wall, " + number + " bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.");
    } 
    else {
      output.push(number + " bottles of beer on the wall, " + number + " bottles of beer. Take one down and pass it around, " + (number - 1) + " bottles of beer on the wall.");
    }
    number--;
  }
   return output;
     
}
  console.log(beer());
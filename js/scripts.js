$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var inputUser = $("input#pigLatinUser").val();


    var way = "way ";
    var newstr = " ";
    var result = "";
    var regex = /[aeiouAEIOU]/gi ;
    var vowels = ["a","e","i","o","u"];
    var vowelIndex;

    var array = inputUser.split(' ');
//for vowels
    for (var i = 0; i< array.length; i++) {
    var matchV = array[i].slice(0,1).match(regex);
    if (matchV) { 
     result = newstr +=  array[i] + way;
// for consonants
    } else {
    for (let char of inputUser) {
      if (vowels.includes(char)){
        vowelIndex= inputUser.indexOf(char);
         var befV = inputUser.slice(0,vowelIndex) ;
         break
          }
          }
         result = inputUser.replace(befV,"") + befV + "ay"
         console.log( result)
}
}
    $("#finalResult").append(result);
    $("#hidden").show();


  });

});

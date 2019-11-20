$("#button").click(function(){

  let word = $("#input").val();
  let vowels = ["a", "e", "i", "o", "u"];
  $("#output").text("");

  if(word.substring(0, 1) in vowels){

    out_word = word + "ay";

  } else{
    
    out_word = word.substring(1) + word.substring(0, 1) + "ay";

  }

  $("#output").text(out_word)

})
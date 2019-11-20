$( "document" ).ready(function(){
$("button").click(function(){
    let userInput = $("input").val();
    let splitter = userInput.split(" ");
    console.log(splitter);
    splitter.forEach(function(element){
        let pigLatin = element.charAt(0);
        let slicer = element.slice(1);
            if (pigLatin === "a"){
                $(".output").append(` ${pigLatin}${slicer}ay`);
            }else if (pigLatin === "e"){
                $(".output").append(` ${pigLatin}${slicer}ay`);
            }else if (pigLatin === "i"){
                $(".output").append(` ${pigLatin}${slicer}ay`);
            }else if (pigLatin === "o"){
                $(".output").append(` ${pigLatin}${slicer}ay`);
            }else if (pigLatin === "u"){
                $(".output").append(` ${pigLatin}${slicer}ay`);
            }
            else{
                $(".output").append(` ${slicer}${pigLatin}ay`);
            }
    });
});
});


$(document).ready(function(){

 
    $("#show").click(function(){
        $("p").slideDown(1000)
    })
    $("#hide").click(function(){
        $("p").slideUp(1000)
    })
    $("#toggle").click(function(){
        $("p").slideToggle(1000)
    })


})

   

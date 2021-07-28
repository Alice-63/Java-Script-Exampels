

$(document).ready(function(){

 
    $("#show").click(function(){
        $("p").show("slow")
    })
    $("#hide").click(function(){
        $("p").hide("fast")
    })
    $("#toggle").click(function(){
        $("p").toggle(1000,function(){
            alert("Sie haben geschafft")
        })
    })


})

   

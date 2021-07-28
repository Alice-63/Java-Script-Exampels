

$(document).ready(function(){

 
    $("#show").click(function(){
       
    })
    $("#hide").click(function(){
        
    })
    $("#toggle").click(function(){
        $("p").toggle(1000,function(){
            $("p").hide("1000", function(){
                $("p").show("1000",function(){
                    $("p").hide("1000")
            })


        })
    })


})

   

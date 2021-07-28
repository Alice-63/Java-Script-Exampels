

$(document).ready(function(){

    $("#control"). change(function(){
        let val=$(this).val();
        $("#box").append(val)
        $(this).val(" ")
    })



})

   

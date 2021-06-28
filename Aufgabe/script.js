var input=document.getElementById("input");
var number=0;

function add()
{ 
    number++; 
    input.value;
    var span=document.getElementById("span");
   

    span.innerHTML+="<div class='box2'>"+number+".  " +input.value+"</div>";
   
    if(input.value=="")
    {
        alert("Bitte alle Felder ausfüllen");
        
    }

    input.value="";

}
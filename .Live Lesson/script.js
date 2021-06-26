

var zahl=[0,1,2]

function add()
{
    var box=document.getElementById("box");
    var input=document.getElementById("input");

   
   
   

    if(input.value==1)
    {
        zahl[0]++;
        box.innerHTML=zahl[0]+ "<br>";
    }

    else if(input.value==2)
    {
        zahl[1]++;
        box.innerHTML=zahl[1]+ "<br>";
    }
    else if(input.value==3)
    {
        zahl[2]++;
        box.innerHTML=zahl[2]+ "<br>";
    }
    else
    {
        box.innerHTML=zahl[zahl.length]+ "<br>";
    }
}




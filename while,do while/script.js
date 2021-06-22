



function klik()
{
    var inputM=document.getElementById("inputM").value;
    var preis=parseInt(document.getElementById("inputP").value);

    if(preis<5000)
    {   var n=1;
        n++;
        var span=document.createElement("span");
        span.innerHTML=n+" " +inputM;
        var guenstig=document.getElementById("guenstig");
        guenstig.appendChild(span)
       
    }
    else if(preis<15000)
    {
        var span=document.createElement("span");
        span.innerHTML=inputM;
        var fair=document.getElementById("fair");
        fair.appendChild(span)
    }
    else
    {
        var span=document.createElement("span");
        span.innerHTML=inputM;
        var teuer=document.getElementById("teuer");
        teuer.appendChild(span)
    }
    }




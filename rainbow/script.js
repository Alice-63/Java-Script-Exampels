





// setTimeout(function(){
//     total(), baby();
//     window.location.reload();
//    }, 2000);


setInterval(total,1000)

function total ()
{
    for (i=90; i>=10; i-=10)
    {
     
     divCreat(i)
     
    
    }
    
    for (i=10;i<=90;i+=10)
    {
        divCreat(i)
        
    }
    

    
}



function divCreat()
{
    var div=document.createElement("div");
   
    document.getElementById("body").appendChild(div);
   
    div.classList.add("box1");
    div.style.height=i+"%";
    div.style.backgroundColor='rgb('+farbe(0,255)+','+farbe(0,255)+','+farbe(0,255)+')';
    

    
}

function baby()
{
    var body=document.getElementById("body");
    body.style.backgroundColor='rgb('+farbe(0,255)+','+farbe(0,255)+','+farbe(0,255)+')';
}

function farbe(min,max)
{
    var rand = Math.floor(Math.random()*(max-min)+min);
    return rand;
}

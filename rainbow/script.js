





// setTimeout(function(){
//     total(), baby();
//     window.location.reload();
//    }, 2000);


var myTime=setInterval(total,1000)

var zeit=5;


function total ()
{
    for (i=90; i>=10; i-=10)
    {
     
     divCreat()
     
    
    }
    
    for (i=10;i<=90;i+=10)
    {
        divCreat()
        
    }
    
    zeit--;
    if(zeit==0)
    {
        clearInterval(myTime);
        setInterval(total,1000)
    }
    
}



function divCreat()
{
    var div=document.createElement("div");
   
    document.getElementById("body").appendChild(div);
   
    div.classList.add("box1");
    div.style.height=i+"%";
    div.style.backgroundColor='rgb('+farbe(0,255)+','+farbe(0,255)+','+farbe(0,255)+')';
    body();

    
}

function body()
{
    var body=document.getElementById("body");
    body.style.backgroundColor='rgb('+farbe(0,255)+','+farbe(0,255)+','+farbe(0,255)+')';
}

function farbe(min,max)
{
    var rand = Math.floor(Math.random()*(max-min)+min);
    return rand;
}

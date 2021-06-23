var bild=["1.png","2.png","3.png","4.png"];
var body=document.getElementById("body");


var n=0;



function weiter()
{
    n++;
   

    if(n>=bild.length)
    {
        n=0;
    }
    body.style.backgroundImage="url("+bild[n]+")"

    
}

function zueruck()
{
    n--;
    
    
    if(n<0)
    {
        n=bild.length-1;
    }
    body.style.backgroundImage="url("+bild[n]+")"
 
}

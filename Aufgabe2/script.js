var bild=["1.png","2.png","3.png","4.png"];
var body=document.getElementById("body");



var i=0


function geht()
{
    
    body.style.backgroundImage="url("+bild[i]+")"
    
    i++;
    if(i==bild.length-1)
    {
        i=1
    }
    
}






var bild=["1.png","2.png","3.png","4.png"];
var body=document.getElementById("body");






function geht(i)
{
    
    body.style.backgroundImage="url("+bild[i]+")"
    
    
    if(i==bild.length-1)
    {
        i=0
    }
    else if(i<0)
    {
        i=bild.length-1
    }
    
}






var bild=["1.png","2.png","3.png","4.png"];
var body=document.getElementById("body");


var n=0;



function weiter()
{
    n++;
    body.style.backgroundImage="url("+bild[n]+")"

    if(n==bild.length-1)
    {
        n=0;
    }

    console.log(n)
}

function zueruck()
{
    n--;
    body.style.backgroundImage="url("+bild[n]+")"
    if(n<0)
    {
        n=bild.length-1;
    }
    console.log(n)
}

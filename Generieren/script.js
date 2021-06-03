
var body=document.getElementById("body");


function start()
{
    var x=parseInt(document.getElementById("inp").value);

    for(i=1; i<=x; i++)
    {
        document.getElementById("erg").innerHTML+= "<span>"+i+ ". Runde </span> <br>";
    }


}

var meinButton= document.createElement("button");

body.appendChild(meinButton);
meinButton.innerHTML="Klick";






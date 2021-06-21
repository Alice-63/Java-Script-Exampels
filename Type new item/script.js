
var erg=document.getElementById("erg");
var zahl=0;
var i=document.getElementById("i");

i.addEventListener('click', add)

var h2=document.createElement("h2");

function add()
{
    var erg=document.getElementById("erg");
    var input=document.getElementById("inp").value;
   if(input=="")
    {
        alert("Tüm alanlari doldurun")
    }
else
    {
    
        var number=Math.floor(Math.random()*1000000)
    var h2=document.createElement("h2");
    h2.className="h2";
    h2.appendChild(document.createTextNode(input))
    erg.appendChild(h2);
    h2.style.backgroundColor="#"+number;
    h2.style.color="#"+(number+511111);
    document.getElementById("inp").value="";
    zahl++;
    add2 (zahl);
    console.log(number)
    }
}
function add2()
{
    
}
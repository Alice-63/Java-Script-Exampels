


function Auto(a,b,c)
{
    this.name=a;
    this.nachname=b;
    this.fullName=c;
}


const val={
    name:"ALi",
    nachname:"Cetindag"
}

val.full="ALi Cetindag";
val.job="Web Etwickler";
delete val;
var box=document.getElementById("box");

var myArray=Object.values(val);
console.log(myArray)

for(i=0; i<myArray.length; i++)
{
    box.innerHTML+=myArray[i]+"<br>";
}

// function add(a)
// {
//    
//    box.style.display="none";
//     // a.innerHTML="Hallo";
//     a.onclick=function(){a.innerHTML="Klick"; box.style.display="block";box.style.width="350px";a.onclick=function(){add(a)}}
  
// }

function add2(a)
{
    let input=document.getElementById("input").value;
    

    var n=input;
    n=n.toUpperCase();

    box.innerHTML+=n+"<br>";
    console.log(n)
}
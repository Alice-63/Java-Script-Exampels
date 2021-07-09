


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

for(let x=0; x<val.length;x++)
{
   console.log(x)
}

function add(a)
{
   var box=document.getElementById("box");
   box.style.display="none";
    // a.innerHTML="Hallo";
    a.onclick=function(){a.innerHTML="Klick"; box.style.display="block";box.style.width="350px";a.onclick=function(){add(a)}}
  
}
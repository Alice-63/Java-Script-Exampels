


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
    a.innerHTML="HAllo";
    a.onclick=function(){a.innerHTML="Klick";a.onclick=function(){add(a)}}
  
}



var countDown=setTimeout(cam,3000);
var con=document.getElementById("con");
var con1=document.getElementById("con1");

function cam()
{
 con.innerHTML="Hallo";
 con1.innerHTML=" "
 setTimeout(cam1,1000);

}

function cam1()
{
    con1.innerHTML="Tag"
    con.innerHTML="Guten";
    setTimeout(cam,1000)
}
var benutzer = document.getElementById("benutzer");
var pass = document.getElementById("pass");
var info = document.getElementById("info");

var richtigerBenutzer = "admin";
var richtigesPasswort = "Pass123";
var zeit=2;

function login()
{
   if(zeit==0)
   {
     var btn=document.getElementById("btn");
    btn.disabled=true;
    info.innerHTML="Sie Wurden Blockiert";
    setTimeout(reset,5000,btn);

   

    
   }
    else{
    if(benutzer.value == richtigerBenutzer)
    {
        if(pass.value == richtigesPasswort)
        {
            info.innerHTML = "Eingeloggt.";
        }
        else
        {
            info.innerHTML = "Passwort ist falsch.";
        }
    }
    else
    {
        info.innerHTML = "Benutzername unbekannt.";
       
    }
}
    zeit--;
}

function reset(x)
{
    x.disabled=false;
}
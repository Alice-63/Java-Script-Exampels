var aktuel = 0;
var forms = document.getElementsByClassName("form");
var progress = document.getElementById("progressfill");
var kreis = document.getElementById("schritte").getElementsByTagName("div");
var alleInput= document.getElementsByTagName("input");
var schritte=document.getElementById("schritte");


for(i=0; i<forms.length;i++)
{
  var k=document.createElement("div");
  schritte.appendChild(k);
}


function nav(n) 
{

  var letzter = aktuel
  
  if(schrittCheck(n))
{
  return;
}

  forms[aktuel].style.display = "none";
  aktuel += n;
  forms[aktuel].style.display = "flex";

  
 
  buttonUpdate()
  progressUpdate(n)
  kreisUpdate(letzter)
}

function schrittCheck(n)
{
  if (aktuel == forms.length - 1 && n == 1) {

    senden();
    return true ;

  }

  if (aktuel == 0 && n == -1) {

    return

  }
}

function buttonUpdate(n)
{
  if (aktuel != 0) {
    document.getElementById("zureuck").style.opacity = "1";
  }
  else {
    document.getElementById("zureuck").style.opacity = "0"
  }

  if (aktuel == forms.length - 1) {
    document.getElementById("weiter").innerHTML = "Senden"
  }

}

function senden()
{
  for( var i=0; i<alleInput.length;i++)
  {
    if(alleInput[i].value=="")
    {
      alert("Bitte ausfüllen");
  
      return;
    }
  }
 
 
  forms[aktuel].style.display="none";
  document.getElementById("gesendet").style.display="block";
  document.getElementById("schritte").style.display="none"
  document.getElementById("zureuck").style.display="none"
  document.getElementById("weiter").style.display="none";
  progress.style.width = "100%"
}









function progressUpdate() {
  // if (aktuel == 1) { progress.style.width = "25%" }
  // else if (aktuel == 2) { progress.style.width = "50%" }
  // else if (aktuel == 3) { progress.style.width = "75%" }
  
  for(i=0;i<aktuel+1;i++)
  {
    var prz=100/forms.length;
    var c=prz*i;

  
  progress.style.width=c+"%";

}


}

function kreisUpdate(vorher) 
{
  kreis[vorher].style.backgroundColor = "#f5d395"
  kreis[aktuel].style.backgroundColor = "darkorange"

}


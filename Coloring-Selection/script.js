
var liste=document.getElementById("liste");
var span=document.getElementById("span");

function farbeAendern()
{
  
  document.body.style.backgroundColor=liste.value;
  var opt=liste.options;
var index=liste.selectedIndex;
span.innerHTML=opt[index].innerHTML;
 

}





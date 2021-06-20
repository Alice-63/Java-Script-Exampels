var btn= document.getElementsByTagName("button");
var card=document.getElementsByClassName("box");
var span= document.getElementsByTagName("span");
var bgColor=document.getElementsByTagName("main");
var header=document.getElementsByTagName("h1");



function uygula()
{
    var btnColor=document.getElementById("btnColor").value;
    var cardColor=document.getElementById("cardColor").value;
    var cardColor=document.getElementById("cardColor").value;
    var font=document.getElementById("font").value;
    var bgClr=document.getElementById("bgColor").value;
    var hdr=document.getElementById("fontSize").value;
  
  for(i=0; i<btn.length;i++)
  {
      btn[i].style.backgroundColor=btnColor
  }
  for(i=0; i<card.length;i++)
  {
      card[i].style.borderColor=cardColor
  }
  for(i=0; i<span.length;i++)
  {
      span[i].style.fontFamily=font
  }
  for(i=0; i<header.length;i++)
  {
      header[i].style.fontSize=hdr;
     
  }
  for(i=0; i<bgColor.length;i++)
  {
      bgColor[i].style.backgroundColor=bgClr;
     
  }

  
}
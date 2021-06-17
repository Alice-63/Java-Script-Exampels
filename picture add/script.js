var input=document.getElementById("link");
var aside=document.getElementById("aside");
var container= document.getElementById("container")
var span=document.getElementById("span")

function add()
{
  var img=document.createElement("img");
   img.src=input.value;
  img.onclick=function()
  {
    imgClick(img.src);
    
  }




  aside.appendChild(img);
  input.value="";
}

function imgClick(x)
{

  span.style.display="block"

  setTimeout(function(){container.style.backgroundImage="url("+x+")";
  span.style.display="none"},1000)
  


}
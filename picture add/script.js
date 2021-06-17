var input=document.getElementById("link");
var aside=document.getElementById("aside");


function add()
{
  var img=document.createElement("img");
  aside.appendChild(img);
  img.src=input.value;
}
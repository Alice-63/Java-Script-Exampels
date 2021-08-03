const span=document.getElementById("span");
const textarea=document.getElementById("text");


function update()
{
    let number=textarea.value.length;
    span.innerHTML=number+ " /100"
}


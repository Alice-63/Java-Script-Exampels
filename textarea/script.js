const span=document.getElementById("span");
const textarea=document.getElementById("text");


function update()
{
    let number=textarea.value.length;
    span.innerHTML="<b>"+number+ " /100 </b>"


    if(number==100)
    {
        span.style.color="red";
        textarea.setAttribute("disabled","true")
    }
    else if(number>=90)
    {
        span.style.color="#da2d2d"
    }
    else if(number>=70)
    {
        span.style.color="#b33737"
    }
    else
    {
        span.style.color="black"
    }
}


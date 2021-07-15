
$(function()
{

    $("button").click(function () { 
        const box=$("#box");

        const div=document.createElement("div");
        div.innerHTML=$("input").val();
        box.before(div);
        $("button:last-child").remove();
    });











})









   

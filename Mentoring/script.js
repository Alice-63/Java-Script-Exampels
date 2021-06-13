
var body=document.getElementById("body");
var myList=["Cilek","Elma","Armut","Kiraz"];
var number=[5,6,7,8]

function add()
{
    for(i=0;i<myList.length;i++)
    {
        var div=document.createElement("div");
        var btn=document.createElement("button");
        btn.innerHTML="Button "+i;

        div.classList.add("box");
        div.innerHTML=myList[i]+" "+ number[i] +"<br>";

        btn.onclick=function(){ekle ()}
   

        body.appendChild(div);
        div.appendChild(btn);

    }
}






function ekle(el)
{
    var box=document.getElementById("box");
    var ikon1=document.createElement("i");
    ikon1.classList.add("fas","fa-carrot");
    var ikon2=document.createElement("i");
    ikon2.classList.add("fas","fa-apple-alt");
    var ikon3=document.createElement("i");
    ikon3.classList.add("fas","fa-apple-alt");
    var ikon4=document.createElement("i");
    ikon4.classList.add("fas","fa-apple-alt");
    

    body.appendChild(ikon1);
    body.appendChild(ikon2);
    body.appendChild(ikon3);
    body.appendChild(ikon4);
 

}

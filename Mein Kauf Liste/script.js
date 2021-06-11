var input = document.getElementById("inp");
var liste = document.getElementById("liste");
var hell = true;
// var listenElemente=[];
// var anzahl=0;

function add() {
    var text = input.value;

    var div = document.createElement("div");

    var iKreuz = document.createElement("i");
    iKreuz.classList.add("fas", "fa-times");
    // iKreuz.dataset.index=anzahl;
    iKreuz.onclick=function()
    {
        // listenElemente[iKreuz.dataset.index].style.display="none";

        var parent=iKreuz.parentNode;
        parent.remove();
    }


    var span = document.createElement("span");

    span.innerHTML = text;

    var iCheck = document.createElement("i");
    iCheck.classList.add("fas", "fa-check");
    iCheck.onclick=function()
    {
        var parent=iCheck.parentNode;
        parent.style.backgroundColor="#bbbbbb";
        parent.style.color="#777777";

        parent.childNodes[1].style.textDecoration="line-through"
    }

    div.appendChild(iKreuz);
    div.appendChild(span);
    div.appendChild(iCheck);



    liste.appendChild(div);


    if (hell) {
        div.style.backgroundColor = "#e6b6e4";
        hell = false;
    }
    else {
        div.style.backgroundColor = "orchid"
        hell = true;
    }


    liste.appendChild(div);
    input.value = "";
    // listenElemente[listenElemente.length]=div;
    // anzahl++;

}


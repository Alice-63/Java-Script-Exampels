var box = document.getElementById("box");
var el = true;



function add() {

    var inp = document.getElementById("dInpn");


    var div = document.createElement("div");
    div.classList.add("box");

    var input = document.createElement("div");
    
    var btn = document.createElement("button");
    btn.innerHTML = "Sil";




    div.appendChild(input);
    div.appendChild(btn);
    box.appendChild(div);

    input.innerHTML=inp.value;


    document.getElementsByClassName("box").innerHTML = inp;

    btn.onclick = function () 
        {
            var parent = btn.parentNode;
            parent.remove();
        }

    


}

function addd() {
    var inp = document.getElementById("dInpn").value;

    document.getElementById("box").innerHTML = inp;
}






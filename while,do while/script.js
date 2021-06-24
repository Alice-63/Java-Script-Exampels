var guenstig = document.getElementById("guenstig");
var fair = document.getElementById("fair");
var teuer = document.getElementById("teuer");
var titel=document.getElementById("titel");
// var liste=document.getElementById("liste");
// var titelKinder=titel.getElementsByTagName("span");
// var listeKinder=liste.getElementsByTagName("div");

// var prozent=100/titelKinder.length;

// for(i = 0; i < titelKinder.length; i++)
// {
//     titelKinder[i].style.width=prozent+"%";
//     listeKinder[i].style.width=prozent+"%";
// }

var zahl1=1;
var zahl2=1;
var zahl3=1;

function klik() {
    var inputM = document.getElementById("inputM").value;
    var preis = parseInt(document.getElementById("inputP").value);
    var span = document.createElement("span");
    span.innerHTML = inputM;
    
    if (preis < 5000) 
    {
        
        var span = document.createElement("span");
        span.innerHTML =zahl1+". "+inputM;
        guenstig.appendChild(span);
        zahl1++;

    }

    else if (preis < 15000) 
    {
        var span = document.createElement("span");
        span.innerHTML =zahl2+". "+inputM;
        fair.appendChild(span);
        zahl2++;
    }

    else 
    {
        var span = document.createElement("span");
        span.innerHTML =zahl3+". "+inputM;
        teuer.appendChild(span);
        zahl3++;
    }

    document.getElementById("inputM").value = "";
    document.getElementById("inputP").value = "";

}
function sortieren(x,y) {
   
}










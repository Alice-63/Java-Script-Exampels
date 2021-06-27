var inputBesch = document.getElementById("b_input");
var inputBetrag = document.getElementById("betragInput");
var liste = document.getElementById("liste");
var ausgabeContainer=document.getElementById("ausgabe");
var bezugContainer=document.getElementById("bezug");
var totalContainer=document.getElementById("total");
var bezug=0;
var ausgabe=0;
var total=0;


function add() {
    if (inputCheck() == false) {
        return
    }

    transactionAdd();

    clear();
}


function inputCheck() {
    if (inputBesch.value == "") {
        inputBesch.style.border = "1px solid red";
        return false;
    }
    else if (inputBetrag.value == "") {
        inputBetrag.style.border = "1px solid red";
        inputBetrag.style.borderRight = "none";

        return false;
    }
    else if (/^[-+]?[0-9]+$/.test(inputBetrag.value) == false) {
        inputBetrag.style.border = "1px solid red";
        inputBetrag.style.borderRight = "none";

        return false
    }
    return true;

}


function transactionAdd() {
    var divContainer = document.createElement("div");
    var spanFirst = document.createElement("span");
    var divBesch = document.createElement("div");
    var spanLast = document.createElement("span");
    spanFirst.innerHTML = "+";
    spanLast.innerHTML = inputBetrag.value + " €";
    divBesch.innerHTML = inputBesch.value;

    var betragZahl = parseInt(inputBetrag.value);

    if (betragZahl < 0) {
        spanFirst.innerHTML = "-";
        spanFirst.style.backgroundColor = "var(--minus)";
        spanLast.style.backgroundColor = "var(--minus)";
    
    }
    divContainer.appendChild(spanFirst);
    divContainer.appendChild(divBesch);
    divContainer.appendChild(spanLast);

    liste.appendChild(divContainer);

  var x=betragZahl;
    

  neu(x)
  total+=betragZahl;
  totalContainer.innerHTML="<b> Total </b> <br>"+total;
  totalContainer.style.backgroundColor="var(--plus)"


}

function clear() {
    inputBesch.value = "";
    inputBetrag.value = "";

    inputBesch.style.border = "none";
    inputBetrag.style.border = "none";
}

function bInput() {
    if (inputBesch.value == "") {
        inputBesch.style.border = "1px solid red";
    }
    else {
        inputBesch.style.border = "1px solid green"
    }
}
function betragInput() {
    if (inputBetrag.value == "" || /^[-+]?[0-9]+$/.test(inputBetrag.value) == false) {
        inputBetrag.style.border = "1px solid red";
    }
    else {
        inputBetrag.style.border = "1px solid green"
    }
}

function neu(x)
{
    
    

    if(x>0)
    {
       
       parseInt(bezug);
       bezug+=x;
             

      
        bezugContainer.innerHTML="<b> Bezug </b> <br> "+bezug;
        
        bezugContainer.style.backgroundColor="var(--plus)";
    }
   else
   {
     ausgabe+=x;
    ausgabeContainer.innerHTML="<b> Ausgabe</b> <br> "+ausgabe;
   
    ausgabeContainer.style.backgroundColor="var(--minus)";
    
   }

  
}
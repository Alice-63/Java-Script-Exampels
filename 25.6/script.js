var inputBesch = document.getElementById("b_input");
var inputBetrag = document.getElementById("betragInput");
var liste = document.getElementById("liste");
var gider=document.getElementById("gider");
var gelir=document.getElementById("gelir");
var genelTop=document.getElementById("geneltoplam");
var i=0;
var i2=0;
var sonuc=0;


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
  sonuc+=betragZahl;
  genelTop.innerHTML=sonuc;


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
       
       parseInt(i);
       i+=x;
             

      
        gelir.innerHTML="Gelir <br> "+i;
        
        gelir.style.backgroundColor="green";
    }
   else
   {
     i2+=x;
    gider.innerHTML="Gider <br> "+i2;
   
    gider.style.backgroundColor="green";
    gider.style.backgroundColor="red";
   }

  
}
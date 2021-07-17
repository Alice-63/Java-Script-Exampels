var box=document.getElementById("box");








function kardeslereYaziYaz(e)
{
    let onceki=e.previousElementSibling;
    let sonraki=e.nextElementSibling;

    while(onceki && sonraki)
    {
        onceki.innerHTML="Merhaba"
        onceki=onceki.previousElementSibling;
        sonraki.innerHTML="Hallo"
        sonraki=sonraki.nextElementSibling;

    }
}

kardeslereYaziYaz(document.getElementById("test"))


// $(document).ready(function () {
    
// $("#test").prevAll().append("Merhaba");
// $("#test").nextAll().text("Hallo")

// });




   

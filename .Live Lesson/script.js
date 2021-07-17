

function kardeslereYaziYaz(e)
{
    let onceki=e.previousElementSibling;
    let sonraki=e.nextElementSibling;

    while(onceki)
    {
        onceki.innerHTML="Merhaba"
        onceki=onceki.previousElementSibling;
        
    }

    while(sonraki)

    { 
        sonraki.innerHTML="Hallo"
        sonraki=sonraki.nextElementSibling;
    }

}

kardeslereYaziYaz(document.getElementById("test"))


// $(document).ready(function () {
    
// $("#test").prevAll().text("Merhaba");
// $("#test").nextAll().text("Hallo")

// });




   

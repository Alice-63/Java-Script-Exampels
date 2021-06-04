 var letzte=null;
 var search =document.getElementById("search");
 var istAktiv=false;

function aktiv(el)
{
    el.classList.add("aktiv");

    if (letzte!=null)
    {
    letzte.classList.remove("aktiv");
    }
    letzte=el;


    if (el.classList.contains("search")==true)
    {
        if (istAktiv==false)
        {
            search.style.opacity="1";
            istAktiv=true;
        }
        else
        {
           search.style.opacity="0";
           istAktiv=false;
        }
    }
    
}


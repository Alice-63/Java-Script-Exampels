
const produktnamen = 
[
    "Tasche",
    "Kühlschrank",
    "Arbeitshose",
    "Tisch",
    "Kühltasche",
    "Kühlbox",
    "Jacke",
    "Kühltruhe",
    "Hemd",
    "Kopftuch",
    "Bosch Kühlschrank",
    "Kühltruhe"
]
const results=document.getElementById("results")


function tip(el)
{
    results.innerHTML="";
 
    let s=el.value.toLowerCase();
    if(s=="" || s.length<2)
    {
      
        results.style.display="none"
        return
    }


    let treffer=[];
    for(p of produktnamen)
    {
        if(p.toLowerCase().includes(s))
        {
            let input=document.getElementById("input")
            treffer.push(p);
            let div=document.createElement("div");
            div.innerHTML=p;
            div.onclick=function(){
                input.value=div.innerHTML;
                results.style.display=""

            }
            results.appendChild(div)
        }
    }

    if(treffer.length==0)
    {
        results.style.display=""
    }
    else
    {
        results.style.display="block"
    }


}




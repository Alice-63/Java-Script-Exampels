
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

function tip(el)
{
 
    let s=el.value.toLowerCase();
    if(s=="" || s.length<2)
    return


    let treffer=[];
    for(p of produktnamen)
    {
        if(p.toLowerCase().includes(s))
        {
            treffer.push(p)
        }
    }
console.log(treffer)

}




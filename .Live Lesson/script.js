var allA=document.getElementsByTagName("a");
var a=false;

function show()
{
    let x="block"
    if(a)
    
        x="none";

    for(i=0 ;i < allA.length ; i++)
    {
        allA[i].style.display=x;
    }
    
    a=!a;
}



















    // if(a==2)
    // {
    //     for(i=0 ;i < allA.length ; i++)
    // {
    //     allA[i].style.display="none";
    //     a=0;
    // }

    // }

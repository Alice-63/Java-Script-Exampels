var allA=document.getElementsByTagName("a");
var a=0;

function show()
{
    a++;
    if(a==1)
    {
    for(i=0 ;i < allA.length ; i++)
    {
        allA[i].style.display="block";
    }
    }
    if(a==2)
    {
        for(i=0 ;i < allA.length ; i++)
    {
        allA[i].style.display="none";
        a=0;
    }

    }
}
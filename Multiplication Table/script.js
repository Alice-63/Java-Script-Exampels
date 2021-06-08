


document.write("<table border='2'>")
document.write("<tr>");
document.write("<td></td>");


for(i=1; i<=10;i++)

{
    document.write("<td>"+i+"</td>");
}
document.write("</tr>")
 for (i=1; i<=10;i++)
 {
     document.write("<tr>");
     document.write("<td>"+i+"</td>");
    
     for(x=1;x<=10;x++)
     {
         document.write('<td> <button onclick="islem('+i+','+x+');">Klick</button> </td>');

    function islem(a,b)
        {
            a*b;
          document.write(a*b);
        }

     }
     document.write("</tr>");

 }
 document.write("</tr>");

 












// for(i=1; i<10;i++)
// {
//     for(x=1;x<10;x++)
//     {
// document.write('<table border="2"><tr><td>'+i+'X'+x+' ='+i*x+'</td></tr></table>');
// }






var app=new Vue({

    el:"#app",
    data:{
        character:"+"
    },
    methods:
    {
        cal(e){
            app.character=e
        },
        
    }

})



function calculate()
{


const spn=document.getElementById("spn");
const result=document.getElementById("result");
var inp1=document.getElementById("inp1").value;
var inp2=document.getElementById("inp2").value;

    if(spn.innerHTML== "+")
        {
        console.log(inp1)
        console.log(inp2)
        result.innerHTML=parseInt(inp1)+parseInt(inp2);
        }
    else if(spn.innerHTML=="-")
        {
        result.innerHTML=parseInt(inp1)-parseInt(inp2);
        }
}

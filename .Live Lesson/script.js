var box=document.getElementById("box");
var inpName=document.getElementById("input1").value;
var inpSurname=document.getElementById("input2").value;
var inpAge=document.getElementById("input3").value;


function Person(name,surname,age)
{
    this.Name=name;
    this.Surname=surname;
    this.Age=age
}

function add2()

{

    var box=document.getElementById("box");
    var inpName=document.getElementById("input1").value;
    var inpSurname=document.getElementById("input2").value;
    var inpAge=document.getElementById("input3").value;

const person1=new Person(inpName,inpSurname,inpAge)

for(x in person1)
{

    box.innerHTML+=x+" : "+person1[x]+"<br>"

}

}


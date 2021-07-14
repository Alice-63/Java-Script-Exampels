var box=document.getElementById("box");


const person=
{
    name:"Ali",
    surname:"Cetindag",
    age:37
}

for(x in person)
{
    box.innerHTML+=x;
}
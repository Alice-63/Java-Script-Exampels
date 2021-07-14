






const person1=
{
id:[1, 2,3,4,5],
name:["Ali", "veli","selim","Can","Onur"],
surname:["cetin", "dag","öz","onur","Can"],
age:[37,25,35,62,12]
}

console.log(Object(person1))

for(x in person1)
{
    let div=document.createElement("div");
    div.classList.add("box");
    let div2=document.createElement("div");
    div2.innerHTML=x;
    div.appendChild(div2);

    let arr=person1[x];

    for(y of arr )

    {
        let div3=document.createElement("div");
        div3.innerHTML=y;
        div.appendChild(div3)
    }

    document.body.appendChild(div);
}
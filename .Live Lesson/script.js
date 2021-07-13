var box=document.getElementById("box");


function Person(isim,soyad,yas,kalem)
{
    this.name=isim;
    this.surname=soyad;
    this.age=yas;
    this.fullName=function(){return this.name+" "+this.surname;}
}

Person.toString.tamIsim="kalem"

const person1=new Person("Ali","Cetin",37);



person1.akk=function()
{
    return this.name+" "+this.surname+" "+this.age;
}
let{name,surname,age,fullName}=person1;
box.innerHTML=name+" "+surname+" "+age+" "+fullName;

console.log(name);
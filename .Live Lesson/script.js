


function Person(isim,soyad,yas,kalem)
{
    this.name=isim;
    this.surname=soyad;
    this.age=yas;
    this.fullName=function(){return this.name+" "+this.surname;}
}

Person.toString.tamIsim="kalem"

const person1=new Person("Ali","Cetin",37);


console.log(person1);
console.log(person1.valueOf(person1))





function Person(isim,soyad,yas)
{
    this.name=isim;
    this.surname=soyad;
    this.age=yas;
    this.fullName=function(){return this.name+" "+this.surname;}
}

const person1=new Person("Ali","Cetin",37);


console.log(person1.fullName())
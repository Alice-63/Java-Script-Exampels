var d=new Date;

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());


document.getElementById("box").innerHTML=d.getMonth()+" "+d.getDate()+" "+d.getFullYear()+"<br>"
+d.getHours()+" "+d.getMinutes()+" "+d.getSeconds();

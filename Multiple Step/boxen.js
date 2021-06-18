 var boxContainer=document.getElementsByClassName("boxContainer");
 var boxArrays=[];


 for (i=0; i<boxContainer.length;i++)
 {
     
    boxArrays[i]=boxContainer[i].getElementsByClassName("car");
 }

 console.log(boxArrays)
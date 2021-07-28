

$(document).ready(function(){

 $("#animate").click(function(){

    let box=$("#box1");

    box.animate({
        left:"700px"
    },2000,function next(){
        let box=document.getElementById("box1");
        
        box.style.left="700px"
     }
    )
    

 })
  
 


})

   

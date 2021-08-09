


const app=new Vue({

    el:"#app",
    data:
    {
        text:"",
        renk:"color:red",
        list:[1,2,3],
        array:{
            Adi:"Ali",
            Soyadi:"Cetindag",
            Yas:"37"}
        
        },
    methods:
        {
            
        }
    
    
})

setTimeout(function(){app.array.Adi="Ahmet"},2000)



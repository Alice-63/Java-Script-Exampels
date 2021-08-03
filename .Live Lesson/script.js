

new Vue({

    el: "#app",
    data:{
        title:"Test Baslik",
        button:"Click",
        paragraph:"lorem impsum ",
        link:"https://www.google.com",
        details:"<b> Bu Bir haber detayidir...</b>",
        id:123,
    }
})

new Vue({


    el:"#app2",
    data:{
        sayi:0,
    },
    methods:
    {
        tikla()
        {
            this.sayi++
        },

        tik(e)
        {
            if(e.keyCode==13)
           {
               this.sayi+=parseInt(e.target.value)
                e.target.value="";
            }
            
        }
    }
})


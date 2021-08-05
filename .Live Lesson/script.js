


const app=new Vue
({
    el:"#app",
    data:{
        sayi:0
    },
    methods:{
        art(){
            this.sayi++
        },
        azt(){
            this.sayi--
        },
        sayiWriter(){
            console.log("Hallo")
            return this.sayi>=18 ? "Resittir":"Degildir"
        }
    }


})




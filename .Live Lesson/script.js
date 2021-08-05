


const app=new Vue
({
    el:"#app",
    data:{
        sayi:0,
        number:0
    },
    methods:{
        art(){
            this.sayi++
        },
        azt(){
            this.sayi--
        },
        sayiWriter(){
            console.log("Hallo Methods")
            return this.sayi>=18 ? "Resittir":"Degildir"
        }
    },
    computed:{
        sayiWriterCom(){
            console.log("Hallo Computed")
            return this.sayi>=18 ? "Resittir":"Degildir"
        }
    }


})



